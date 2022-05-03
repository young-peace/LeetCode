/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    if (matrix.length == 0) return [];
  const res = [];

  let top = 0;
  let bottom = matrix.length - 1; //行
  let left = 0;
  let right = matrix[0].length - 1; //列

  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]);   // 上层
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右层
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]);// 下层
    for (let i = bottom; i > top; i--) res.push(matrix[i][left]);  // 左层
    right--;
    top++;
    bottom--;
    left++;
  }
  if (top == bottom) { // 剩下一行，从左到右依次添加
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
  } else if (left == right) { // 剩下一列，从上到下依次添加
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  }
  return res;
};
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))