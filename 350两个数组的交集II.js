/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const l1 = nums1.length, l2 = nums2.length;
    let index1 = 0, index2 = 0;
    const intersection = [];
    while (index1 < l1 && index2 < l2) { 
        const num1 = nums1[index1], num2 = nums2[index2];
        if (num1 === num2) {
            intersection.push(num1);
            index1++;
            index2++;
            // 哪个元素小就向后移动哪个元素
        } else if (num1 < num2) {
            index1++;
        } else { 
            index2++;
        }
    }
    return intersection
};
console.log(intersect([4,9,5], [9,4,9,8,4]))
