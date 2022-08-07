// 最大子数组和

/**
 * 思路： 建一个dp数组，在数组的每一个位置，都要抉择是以当前值为开始构建新序列，还是沿用老的序列且将当前值加入到序列中。
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubArray = (nums: number[]): number => {
  const dp: number[] = [];
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }

  return Math.max(...dp);
};

console.log(maxSubArray(nums));
