// 螺旋矩阵
/**
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 解释：螺旋遍历
 *
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
 * 输出：[1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
 */
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
enum Direction {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}
const spiralOrder = (matrix: number[][]): number[] => {
  const result: number[] = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let direction = Direction.RIGHT;

  while (top <= bottom && left <= right) {
    if (direction === Direction.RIGHT) {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = Direction.DOWN;
    } else if (direction === Direction.DOWN) {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = Direction.LEFT;
    } else if (direction === Direction.LEFT) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = Direction.UP;
    } else if (direction === Direction.UP) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = Direction.RIGHT;
    }
  }
  return result;
};

console.log(spiralOrder(matrix));
