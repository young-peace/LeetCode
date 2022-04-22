/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = 0;
     for (let i = 0; i < nums.length; i++) { 
         if (nums[i] !== val) { 
             nums[j] = nums[i]
             j++;
         }
    }
    return nums.slice(0,j)
};
// 官方题解，也是双指针，好处在于两个指针加起来最多就遍历数组一次
var removeElement = function (nums, val) {
    let left = 0,right=nums.length-1;
    while (left <= right) { 
        if (nums[left] === val) {
            nums[left] = nums[right]
            right--;
        } else { 
            left++;
        }

    }
    return left;
};
console.log(removeElement([3,2,2,3],3))