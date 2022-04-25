/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 官方题解
// 解法一：直接合并两个数组后排序
// 时间复杂度O((m+n)log(m+n))
// 空间复杂度O(log(m+n))
/* var merge = function(nums1, m, nums2, n) {
     nums1.splice(m, nums1.length - m, ...nums2);
     nums1.sort((a,b)=>a-b)
}; */
// 解法二：双指针
// 利用两个数组是有序的这个性质
// 将两个数组看作队列，每次从两个数组头部取出比较小的数字放到结果队列中
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = new Array(m + n).fill(0);
    var cur;
    while (p1 < m ||p2<n) { 
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else { 
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i != m + n; ++i) { 
        nums1[i] = sorted[i];
    }
};
// 解法三
// 解法二中之所以设置临时变量存储结果，是因为如果直接合并数组到nums1中，会覆盖其元素
// 避免nums1中元素被覆盖的方法：nums1后半部分是空的，因此可以从后向前遍历，将两个数组中比较大的元素放到nums1的最后面
/* var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1;
    let tail = m + n - 1;
    var cur;
    while (p1 >= 0 || p2 >= 0) { 
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else { 
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
}; */
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))