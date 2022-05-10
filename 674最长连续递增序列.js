/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let n = 1, index = 1;
    for (let i = 0, j = 1; j < nums.length; i++, j++) { 
        if (nums[i] >= nums[j]) {
            n= Math.max(index, n)
            index = 0;
        } 
        index++;
    }
    return Math.max(index, n);
};
// console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))
console.log(findLengthOfLCIS([1,3,5,4,7]))
// console.log(findLengthOfLCIS([1,3,5,4,7,0,2,6,8,9]))
