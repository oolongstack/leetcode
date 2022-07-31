// 有效括号
/**
 * 输入：s = "()[]{}"
 * 输出：true
 *
 * 输入：s = "(]"
 * 输出：false
 *
 * 输入：s = "([)]"
 * 输出：false
 */

const s1 = "()[]{}";
const s2 = "(]";
const s3 = "([)]";

const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const map: Map<string, string> = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(<string>map.get(s[i]));
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid(s2));

export {};
