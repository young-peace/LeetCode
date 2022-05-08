/**
 * @param {number[][]} grid
 * @return {number}
 */
/* var islandPerimeter = function (grid) {
    const row = grid.length, column = grid[0].length
    let sum = 0;
    for (let i = 0 ; i < row; i++) { 
        for (let j = 0; j < column; j++) { 
            let cur = 4;
            if (grid[i][j] === 1) { 
                // left
                if (j - 1 >= 0 && !!grid[i][j - 1]) { 
                    cur--;
                }
                // right
                if (j + 1 < column && !!grid[i][j + 1]) { 
                    cur--;
                }
                // top
                if (i - 1 >= 0 && !!grid[i - 1][j]) { 
                    cur--;
                }
                // bottom
                if (i + 1 < row && !!grid[i + 1][j]) { 
                    cur--;
                }
                sum += cur;
            }
        } 
    } 
    return sum;
}; */
// 刷友题解
// 土地周长=土地数量*4-右下都有土地接壤的边数*2
// 反思：技巧性解答，完全没想到
var islandPerimeter = function (grid) { 
    let land = 0;
    let border = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) { 
                land++;
                // 右
                if (i < grid.length - 1 && grid[i + 1][j] === 1) { 
                    border++;
                }
                // 下
                if (j < grid[0].length && grid[i][j + 1] === 1) { 
                    border++;
                }
            }
        }
    }
    return 4 * land - 2 * border;

}
// 刷友题解
// dfs
// 反思：还是递归看不懂。。
const islandPerimeter = (grid) => {
    const dfs = (i, j) => {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
        return 1; // 当前正好越界，说明穿过了一个边界，周长+1
      }
      if (grid[i][j] == 0) { // 从土地来到了海水，说明穿过了一个边界，周长+1
        return 1;
      }
      if (grid[i][j] == 2) { // 之前访问过，直接返回，返回0，无周长收益
        return 0;
      }
      // 到此，当前点为1，将它改为2，代表已访问
      grid[i][j] = 2; 
      // 继续往四个方向“扩散”，目标是遇到边界和海水，答案随着递归出栈向上返回，得出大的答案
      return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
    };
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          return dfs(i, j);   // dfs的入口
        }
      }
    }
    return 0;
  };
console.log(islandPerimeter([[1, 0], [1, 0]]))