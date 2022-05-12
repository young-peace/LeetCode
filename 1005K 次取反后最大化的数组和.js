/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 贪心
var largestSumAfterKNegations = function (nums, k) {
    //  将数组按绝对值大小排降序
     nums.sort((a, b) => { 
         return Math.abs(b)-Math.abs(a)
     })
    for (let i = 0; i < nums.length; i++) { 
        //  先将负数变正
         if (nums[i] < 0 && k > 0) { 
             nums[i] *= -1;
             k--;
         }
    }
    // 如果负数变完了，从后向前遍历，将正数变负
     if (k > 0 && k % 2 === 1) { 
         nums[nums.length - 1] *= -1;
     }
     k = 0;
     return nums.reduce((a, b) => { 
         return a + b;
     })
};
console.log(largestSumAfterKNegations([3,-1,0,2],3))