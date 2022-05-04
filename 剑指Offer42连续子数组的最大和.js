/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max_sum = nums[0]
    let cur_sum=max_sum
    for (let i = 1; i < nums.length; i++) { 
        cur_sum = Math.max(nums[i], cur_sum + nums[i])
        max_sum=Math.max(cur_sum,max_sum)
    }
    return max_sum;
};