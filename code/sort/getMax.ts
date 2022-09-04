const arr = [2, 5, 8, 2, 4, 5, 6, 0, 12, 45];

function getMax(arr: number[], l: number, r: number) {
  return process(arr, l, r);
}
function process(arr: number[], l: number, r: number): number {
  if (l == r) return arr[l];
  let mid = Math.floor((l + r) / 2);
  const leftMax = process(arr, l, mid);
  const rightMax = process(arr, mid + 1, r);
  return Math.max(leftMax, rightMax);
}

console.log(getMax(arr, 0, arr.length - 1));

export {};
