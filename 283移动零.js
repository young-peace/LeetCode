/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 双指针
var moveZeroes = function (nums) {
    // let j = 1;
    // for (let i = 0; j <= nums.length-1; i++) { 
    //     while (nums[i] === 0 && j<=nums.length-1) { 
    //         if (nums[j] !== 0) {
    //             nums[i] = nums[j];
    //             nums[j] = 0;
    //             break;
    //         } else { 
    //             j++;
    //         }
    //     }
    //     j++;         
    // }
    // return nums;
    let a, b;
    nums.sort((a,b) => b ? 0: -1)
};
console.log(moveZeroes([0,1,0,3,12]))