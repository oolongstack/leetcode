// 荷兰国旗问题  partition
// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
const nums = [3, 5, 7, 2, 9, 0, 6, 4, 1]; // target : 5 ; < 5 放左边 ; > 5 放右边
function swap(nums: number[], l: number, r: number) {
  let temp = nums[r];
  nums[r] = nums[l];
  nums[l] = temp;
}
// 简易版 小于等于target的在左边 大于target的在右边

function lite(nums: number[], target: number) {
  let lessAres = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      swap(nums, lessAres + 1, i);
      lessAres++;
    }
  }
  return [...nums];
}

// console.log(lite(nums, 5));  [3, 5, 2, 0, 4, 1, 6, 9, 7]

function sortColors(nums: number[], target: number): number[] {
  let lessArea = -1;
  let moreArea = nums.length;
  let i = 0;
  // 使用 i 做结束条件，i和 大于等于区域碰面时，索命所有值都看过了
  while (i < moreArea) {
    const now = nums[i];
    if (now < target) {
      swap(nums, lessArea + 1, i);
      i++;
      lessArea++;
    } else if (now === target) {
      i++;
    } else {
      swap(nums, moreArea - 1, i);
      moreArea--;
    }
  }

  return [...nums];
}

console.log(sortColors(nums, 5));

export {};
