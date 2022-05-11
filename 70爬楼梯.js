/**
 * @param {number} n
 * @return {number}
 */
// 官方题解
// 
/* 
1.dp数组及下标
dp[i]为爬到第i级有多少种方法
2.递推公式
dp[i]=dp[i-1]+dp[i-2]
最后一步可能跨了1级或2级，那么在跨越最后一级台阶之前，到达的台阶就是i-1或i-2
3.初始化数组
dp[0]=1,dp[1]=1
 */
var climbStairs = function (n) {
    // let p = 0, q = 0, r = 1;
    dp=[1,1]
    for (let i = 2; i <= n; ++i) {
        // 使用滚动数组的方法实现
        /* p = q;
        q = r;
        r = p + q; */
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    // return r;
    return dp[n];
};
console.log(climbStairs(5))