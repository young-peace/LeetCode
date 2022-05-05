/**
 * @param {number[]} nums
 * @return {number}
 */
// 官方题解一：排序
// 先倒序
// 设置diff计数不同的元素，返回第三个不同的元素
var thirdMax = function (nums) {
    nums.sort((a, b) => b - a);
     for (let i = 1,diff=1; i < nums.length; i++) { 
         if (nums[i] != nums[i - 1] && ++diff === 3) { 
             return nums[i];
         }
     }
};
console.log(thirdMax([1,1,2]))