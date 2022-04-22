/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    //  let left = 0, right = nums.length - 1, mid = Math.floor((nums.length) / 2);
    //  while (left <= right) { 
    //      if (mid===0 && mid!==target) { 
    //          return mid;
    //      }
    //      if (mid===nums.length-1 && mid!==target) { 
    //          return nums.length
    //      }
    //      if (left === right && mid !== target) { 
    //          return left + 1;
    //      }
    //      if (nums[mid] < target) {
    //          left = mid + 1;
    //          mid = Math.floor((right + left+1) / 2);
    //      } else if (nums[mid] > target) { 
    //          right = mid - 1;
    //          mid = Math.floor((right + left+1) / 2);
    //     } else {
    //          return mid
    //      }
    //  }
    // 二分查找，查找结束如果没有相等值则返回left，该值为插入位置
     const n = nums.length;
     let left = 0, right = n - 1, ans = n;
     while (left <= right) { 
         let mid = ((right - left) >> 1) + left;
         if (target <= nums[mid]) {
             ans = mid;
             right = mid - 1;
         } else { 
             left = mid + 1;
         }
     }
     return ans;
};
console.log(searchInsert([1,3,5,6,7],0))