// 在一个排序数组中找到 大于等于某一个数最左侧的索引

const arr = [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5];

function bs(target: number, array: number[]): number {
  let start = 0;
  let end = array.length - 1;
  let idx = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] >= target) {
      idx = mid;
      end = mid - 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    }
  }
  return idx;
}

console.log(bs(3, arr));
