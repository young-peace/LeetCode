/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 反思：遇到双指针，两指针都从前遍历改为一个从前一个从后遍历
var sortArrayByParity = function (nums) {
    const n = nums.length;
    const res = new Array(n).fill(0);
    let left = 0, right = n - 1;
    for (const num of nums) {
        if (num % 2 === 0) {
            res[left++] = num;
        } else {
            res[right--] = num;
        }
    }
    return res;
};
console.log(sortArrayByParity([0]))