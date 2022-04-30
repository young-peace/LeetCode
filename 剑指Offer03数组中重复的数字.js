/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用map记录重复的元素
 /* var findRepeatNumber = function(nums) {
    let map = new Map();
     for (let num of nums) { 
         if (!map.has(num)) {
             map.set(num, 1)
         } else { 
             return num;
         }
     }
     return false;
}; */
var findRepeatNumber = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length-1; i++) { 
        if (nums[i] === nums[i+1]) {
            return nums[i];
        }
    }
    return false;
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))