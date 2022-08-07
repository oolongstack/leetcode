// 冒泡排序
const nums = [5, 1, 7, 3, 0, 2, 9, 6, 5, 4];
function wrap(nums: number[], l: number, r: number) {
  const temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}
const bubbleSort = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        wrap(nums, j, j + 1);
      }
    }
  }
  return nums;
};

console.log(bubbleSort(nums));

export {};
