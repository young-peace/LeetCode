/**
 * @param {number[]} nums
 * @return {number}
 */
/*  var missingNumber = function(nums) {
     for (let i = 0; i < nums.length; i++) { 
         if (nums.indexOf(i) == -1) { 
             return i;
         }
     }
}; */
// 官方题解1：位运算
// 在数组nums后添加从0到n的n+1个数，此时数组共有2n+1个整数
// 在2n+1个整数中，丢失的数字在这个数组中只出现一次，其它数字都会出现两次
// 根据出现次数的奇偶性，可以使用按位异或运算得到丢失的数字
// x异或x=0，x异或0=x，且异或运算满足交换律和结合律
/* var missingNumber = function(nums) {
    let xor = 0;
    const n = nums.length;
    // 原本的数组
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    // 完整的数组
    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }
    return xor;
}; */
// 官方题解2：排序
// 先给数组排好序，如果在对应位置不显示对应数字那必然就是缺失数字
/* var missingNumber = function(nums) {
    nums.sort((a, b) => a - b)
    let n = nums.length;
    for (let i = 0; i < n; i++) { 
        if (i !== nums[i]) { 
            return i;
        }
    }
    return n;
}; */
// 官方题解3：数学
// nums的和与完整数组的和之差就是缺失的数字
var missingNumber = function(nums) {
    const n = nums.length;
    let total = Math.floor(n * (n + 1) / 2);
    let sum = 0;
    for (let i = 0; i < n; i++) { 
        sum += nums[i];
    }
    return total - sum;
};
// var missingNumber = function(nums) {
    
// };
console.log(missingNumber([3,0,1]))