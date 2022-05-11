/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    /* let sum1 = cost[0],sum2=cost[1];
    let n = cost.length;
    cost[n] = 0;
    function start(x,sum) { 
        for (let i = x; i < n; i++) {        
            if (cost[i] < cost[i + 1]) {
                sum += cost[i];
                
            } else { 
                sum += cost[i+1];
                i++;
            }   
        }
        return sum
    }
    return Math.min(start(1,sum1),start(2,sum2)) */
    /* 
    1.确定dp数组以及下标的含义
    dp[i]的定义：到达第i个台阶所花费的最少体力为dp[i]
    2.确定递推公式
    dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i]
    3.dp数组如何初始化
    初始化dp[0]和dp[1]就够了，其他的最终都是dp[0]dp[1]推出。
    4.确定遍历顺序
    5.举例推导dp数组
    */
    const dp = [ cost[0], cost[1] ]
    for (let i = 2; i < cost.length; ++i) {
        dp[i] = Math.min(dp[i -1] + cost[i], dp[i - 2] + cost[i])
    }
    return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
// console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([0,1,2,2]))

