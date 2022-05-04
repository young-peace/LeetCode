// 官方题解：前缀和
// 如果算哪个区间的和就去算一遍，那随着运算量的增减，复杂度也会增加
// 但如果提前算好位置i和之前位置的和，那么查询和的时候，只需做一步减法运算
/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    this.preNums = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) { 
        this.preNums[i+1]=this.preNums[i]+nums[i]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // 查询闭区间[left, right] 的累加和
    return this.preNums[right + 1] - this.preNums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */