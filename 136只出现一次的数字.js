/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用多余空间，存在问题，map.has，map里面明明又此元素，却判断为没有
// 改为set表即可正常
/* var singleNumber = function (nums) {
    let map = new Map();
    let n = 0;
    for (let i = 0; i < nums.length; i++) { 
        if (map.has(nums[i])) {
            map.delete(nums[i]);
        } else { 
            map.set(n, nums[i]);
            n++;
        }
    }
    return map.get(0);
}; */
// 刷友解法：异或运算，不用多余空间
// 0异或1=1
// 1异或1=0
// 0异或0=1
// 将所有数组按照顺序做异或运算，最后剩下的结果即为唯一的数字
// 时间复杂度O(n);空间复杂度O(1)
var singleNumber = function (nums) {
    let ans = 0;
    for (const num of nums) { 
        ans = ans^num;
    }
    return ans;
};
console.log(singleNumber([4,1,2,1,2]))