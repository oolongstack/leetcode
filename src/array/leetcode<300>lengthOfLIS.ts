// 最长递增子序列问题
// nums = [10, 9, 2, 5, 3, 7, 101, 18]; => 4 (2, 3, 7, 101)

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

// 动态规划思想
const lengthOfLIS1 = (nums: number[]): number => {
  const dp: number[] = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    for (let j = i; j >= 0; j--) {
      if (num > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

console.log(lengthOfLIS1(nums));

// 二分法 + 贪心
const lengthOfLIS2 = (nums: number[]): number => {
  const result = [nums[0]];
  let start;
  let end;
  let mid;
  for (let i = 0; i < nums.length; i++) {
    let last = result[result.length - 1];
    if (nums[i] > last) {
      result.push(nums[i]);
      continue;
    }
    start = 0;
    end = result.length - 1;
    while (start < end) {
      mid = Math.floor((start + end) / 2);
      if (nums[i] > result[mid]) {
        start = mid + 1;
      } else if (nums[i] < result[mid]) {
        end = mid;
      }
    }
    result[start] = nums[i];
  }

  return result.length;
};

console.log(lengthOfLIS2(nums));

export {};
