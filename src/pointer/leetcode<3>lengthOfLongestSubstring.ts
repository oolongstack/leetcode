// 无重复字符的最长子串
/**
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 */
const s = "abcabcbb";
const lengthOfLongestSubstring = (s: string): number => {
  let maxLength: number = 0;
  let j = 0;
  const set = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring(s)); // 3

export {};
