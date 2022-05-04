/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 不能用indexOf这种API
/* var intersection = function (nums1, nums2) {
    let list = [];
     for (let num of nums2) { 
         if (nums1.indexOf(num)!==-1) { 
             list.push(num);
         }
    }
    return list;
}; */

// 官方题解：排序+双指针（想到了但懒得写。。。下次要手动写下）

var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const l1 = nums1.length, l2 = nums2.length;
    let index1 = 0, index2 = 0;
    const intersection = [];
    while (index1 < l1 && index2 < l2) { 
        const num1 = nums1[index1], num2 = nums2[index2];
        if (num1 === num2) {
            // 防止重复加入
            if (!intersection.length || num1 !== intersection[intersection.length - 1]) {
                intersection.push(num1);
            }
            index1++;
            index2;
            // 哪个元素小就向后移动哪个元素
        } else if (num1 < num2) {
            index1++;
        } else { 
            index2++;
        }
    }
    return intersection

};
console.log(intersection([1, 2, 2, 1], [2, 2]))