const arr = [3, 1, 22, 6, 9, 8, 0, 45, 68, 23];
// 归并排序
function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  process(arr, 0, arr.length - 1);
  return arr;
}
function process(arr: number[], left: number, right: number) {
  if (left === right) return;
  let mid = Math.floor((left + right) / 2);
  process(arr, left, mid);
  process(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr: number[], left: number, mid: number, right: number) {
  let help = [];
  let i = 0;
  let p1 = left;
  let p2 = mid + 1;

  while (p1 <= mid && p2 <= right) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }

  while (p1 <= mid) {
    help[i++] = arr[p1++];
  }
  while (p2 <= right) {
    help[i++] = arr[p2++];
  }

  for (let i = 0; i < help.length; i++) {
    arr[left + i] = help[i];
  }
}

console.log(mergeSort(arr));

export {};
