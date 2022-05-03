/**
 * @param {number[]} nums
 * @return {number}
 */
// 同169题
// 刷友题解
// 
 var majorityElement = function(nums) {
   // 代表结果的众数
  let res;
  // 统计票数
  let votes = 0;
  for (let i = 0; i < nums.length; i++) {
    // 刚开始是0票，所以把数组的第一个元素作为众数
    // 如果以后的循环votes票数被抵消掉了为0，那么下一个元素就作为众数
    if (votes == 0) {
      res = nums[i];
    }
    // 和当前众数相同的，那么票数就加1
    if (res == nums[i]) {
      votes++;
    } else {
      // 如果和当前票数不同，票数就被抵消掉了一个
      votes--;
    }
  }
  return res;
};
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))