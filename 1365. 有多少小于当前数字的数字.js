/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* 
（1）暴力双重循环
（2）排序
将数组排序，记录数组中每个元素原来的位置，对于排序后的每一个数，找出左侧第一个小于它的数
这样就知道数组中小于该数的数量
*/
var smallerNumbersThanCurrent = function (nums) {
    const n = nums.length;
    //  创建一个数组，数组中的每个值都是数组
     const data = new Array(n).fill(0).map(v => new Array(2).fill(0))
    // 使用二维数组，第一位存储值，第二位存储键
     for (let i = 0; i < n; i++) { 
         data[i][0] = nums[i];
         data[i][1] = i;
     }
    //  使用值排序
     data.sort((a, b) => a[0] - b[0]);

    const ret = new Array(n);
    // 因为判断i和i-1，结果数组要从0开始，第一个值没法记录，因此使用prev来当中间值记录
     let prev = -1;
    for (let i = 0; i < n; ++i) { 
        //  如果当前元素不等于前一个元素，那么当前元素的的下标值就是它比多少个元素大的数量（下标值从0开始）
        if (prev == -1 || data[i][0] !== data[i - 1][0]) { 
             prev = i;
        }
        // 以元素之前在数组中的顺序存储
         ret[data[i][1]] = prev;
     }
     return ret;
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))