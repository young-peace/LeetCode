/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// map值为num，键为出现次数，无法保存索引值
// 刷友题解
// 维护一个哈希表，里面始终最多包含k个元素，当出现重复值时则说明在k距离内存在重复元素
// 每次遍历一个元素则将其加入哈希表中，如果哈希表的大小大于k，则移除最前面的数字（妙啊）
// 时间复杂度O(n)，n为数组长度
// 利用set不可重复的属性
 var containsNearbyDuplicate = function(nums, k) {
     for (let i = 0; i < nums.length; i++) { 
         if (set.has(nums[i])) { 
             return true;
         }
         set.add(nums[i]);
         if (set.size > k) { 
             set.delete(nums[i - k]);
         }
     }
     return false;
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))