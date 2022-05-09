/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const n = nums.length;
     let left = 0, right = n - 1;
     while (left <= right) { 
         let mid = Math.floor((right - left) / 2) + left;
         if (target < nums[mid]) {
             right = mid - 1;
         } else if (target > nums[mid]) {
             left = mid + 1;
         } else { 
             return mid;
         }
     }
     return -1;
};
console.log(search([-1,0,3,5,9,12],2))