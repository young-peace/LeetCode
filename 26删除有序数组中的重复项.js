/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
// 定义一个快指针，一个慢指针
// 慢指针指向nums[0],快指针指向nums[1]
// 快指针不断向后移动，当快指针所指的数和慢指针不同时，慢指针向后移动一位，并且其值变为快指针所指的值
var removeDuplicates = function (nums) {
    // 慢指针
    let j = 0
    // 快指针
    for (let i = 1; i < nums.length; i++) { 
        if (nums[i] !== nums[j]) { 
            j++;
            // 慢指针才是实际对数组做操作的，快指针只是在遍历
            nums[j] = nums[i];
        }
    }
    return j+1
        
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))