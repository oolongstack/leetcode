// 两数之和

/**
 *给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的下标。
 *你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *你可以按任意顺序返回答案。
 *示例 1:nums = [2,7,11,15], target = 9  => [0,1]
 */
const nums = [2, 7, 11, 15];
const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const subNum = target - nums[i];
    if (map.has(subNum)) {
      return [<number>map.get(subNum), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

console.log(twoSum(nums, 9));

export {};
