/**
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 * 输入：n = 1
 * 输出：["()"]
 */

const generateParenthesis = (n: number): string[] => {
  const result: string[] = [];
  const backtrack = (left: number, right: number, str: string) => {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }
    if (left < n) {
      backtrack(left + 1, right, str + "(");
    }
    // 右括号使用的数量要小于左括号使用的数量
    if (right < n && right < left) {
      backtrack(left, right + 1, str + ")");
    }
  };

  backtrack(0, 0, "");

  return result;
};

console.log(generateParenthesis(3));

export {};
