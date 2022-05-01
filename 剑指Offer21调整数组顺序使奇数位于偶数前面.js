/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 双指针失败，从头开始，两个指针差一位出发
/* var exchange = function (nums) {
    let j = 0;
    for (let i = 1; i < nums.length ; i++) { 
        while ((nums[i]+1)%2===0 && j<nums.length) { 
            if ((nums[j]+1) % 2 !== 0) {
                [nums[j], nums[i]] = [nums[i], nums[j]];
                j++;
                break;
            } else { 
                j++;
            } 
        }      
    }
    return nums;
}; */
// 刷友题解
// 双指针，一个从头出发，一个从尾出发
var exchange = function(nums) {
    let i, j;
    for(i = 0, j = nums.length - 1; i < j; i++, j--) {
        // i 循环找到偶数为止，因为要把偶数换到后面去
        while(i < j && nums[i] % 2 !== 0)
            i++;
        // j 循环找到奇数为止，因为要把奇数换到前面去
        while(i < j && nums[j] % 2 === 0)
            j--;
        [nums[i],nums[j]]=[nums[j],nums[i]]
    }
    return nums;
};
console.log(exchange([1,11,14]))