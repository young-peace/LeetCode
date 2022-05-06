/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 刷友题解
 var findDisappearedNumbers = function(nums) {
    let i = 0;
    while (i < nums.length) {
        // 如果在对应位置出现了对应数字，那么就进行下个元素的检查
        if (nums[i] == i + 1) {
            i++;
            continue;
        }
        // 如果这个位置的元素不是正确元素
        // 那么查看这个元素是否出现在它该出现的位置（有重复元素）
        // 如果有的话，就检查下一个元素
        const idealIdx = nums[i] - 1;
        if (nums[i] == nums[idealIdx]) {
            i++;
            continue;
        }
        // 如果这个元素在它该出现的位置也没出现，那就把它交换到它该出现的位置
        [nums[idealIdx], nums[i]] = [nums[i], nums[idealIdx]];
     }
    //  检查如果对应位置没有对应元素就将对应元素添加到一个新的数组中返回
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {        
            res.push(i+1);
        }   
    }
    return res;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))