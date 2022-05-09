/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// nums1<nums2
var nextGreaterElement = function (nums1, nums2) {
    let l1 = nums1.length,l2 = nums2.length,k;
    let list = new Array(l1).fill(0);
    for (let i = 0; i < nums1.length; i++) { 
        for (let j = 0; j < l2; j++) { 
            if (nums1[i] === nums2[j]) { 
                k = j + 1;
                 while (nums2[j] >= nums2[k] && k < l2) { 
                     k++;
                 }
             }
         }
        list[i] = k < l2 ? nums2[k] : -1;
    }
    return list;
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]))