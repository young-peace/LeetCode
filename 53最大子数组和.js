/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // let len = nums.length;
    // let sum = nums[0];
    // let bfsum = sum;
    // let n;
    // if (len === 1) { 
    //     return nums[0];
    // }
    // for (let i = 1;; i < len-1; i++) {      
    //     sum = sum + nums[i];
    //      bfsum=Math.max(sum,bfsum)
    //     n = Math.max(sum + nums[i], nums[i])
    //      bfsum=Math.max(sum,n)
    // }
    // return Math.max(n,bfsum);
    // 官方题解
    // 解法一：贪心
    // 若当前指针所指元素之前的和小于0，则丢弃当前元素之前的数列
    // 设置边界条件
    let max_sum = nums[0]
    let cur_sum=max_sum
    for (let i = 1; i < nums.length; i++) { 
        cur_sum = Math.max(nums[i], cur_sum + nums[i])
        max_sum=Math.max(cur_sum,max_sum)
    }
    return max_sum;
    
    // 解法二：动态规划
    // 若前一个元素大于0，则将其加到当前元素上
    // n = nums.length;
    // for (let i = 1; i < n; i++) { 
    //     if (nums[i - 1] > 0) { 
    //         nums[i]+=nums[i-1]
    //     }
    // }
    // return Math.max(...nums)
    
};
console.log(maxSubArray([-2,-1]))