/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 刷友题解 
// 反思：又是想到写一半没做完的题解
// 边平方，边判断是否放入栈中
var sortedSquares = function (nums) {
    /* let stack = [], n = nums.length;
    for (let i = 0; i < n; i++) { 
        nums[i] = nums[i] * nums[i];
    }
    let j = 1;
    for (let i = 0; j < n; i++, j++) { 
        if (nums[i] > nums[j]) { 
            stack.unshift(nums[i]);
        }
    }
    for (let i = 0; i < stack.length && j < n;i++,j++ ) { 
        if (stack[i] <= nums[j]) {
            list.push(stack[i]);
            stack.pop();
        } else { 
            list.push(stack[i]);
        }
    } */
    let stack = [], arr = [];
    for (let i = 0; i < nums.length; i++) { 
        let t = nums[i] * nums[i];
        // 边平方边存栈
        // 如果当前数<0，将其存入栈中
        if (nums[i] < 0) {
            stack.unshift(t);
        } else { 
            // 小于0的数已经存完，开始比较栈中的数和剩余的数，构造新的数组
            while (stack[0] < t) { 
                arr.push(stack[0]);
                stack.shift();
            }
            // 如果栈顶的数比当前数大，把当前数存入数组
            arr.push(t);
        }
    }
    // 将栈中剩余的数拼接到新数组
    // 因为遍历的是原数组中的数，所以原数组中的数不会剩
    return arr.concat(stack)
     
};
// console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-5,-3,-2,-1]))
