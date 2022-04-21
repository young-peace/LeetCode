/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划问题，将一个大问题的最优解分成多个小问题的最优解
// 同抢劫问题
// 定义一个数组dp，dp[i]表示抢劫到第i个房子时，可以抢劫的最大数量
// 此时可以抢劫的最大数量有两种可能：
// 一种是我们选择不抢劫这个房子，此时累计的金额即为dp[i-1]
// 另一种是我们选择抢劫这个房子，此时累计的金额即为num[i]+dp[i-2]
 var massage = function(nums) {
     if (nums === '') { 
         return 0;
     }
     const n = nums.length;
    //  当只有一个房子时，只能抢劫这个房子num[0]
    //  当有两个房子时，选一个金额最大的抢劫
     const dp = [nums[0],Math.max(nums[0],nums[1])]
     for (let i = 2; i < n; i++) { 
         dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
     }
     return dp[n-1]
};
console.log(massage([2,1,4,5,3,1,1,3]))