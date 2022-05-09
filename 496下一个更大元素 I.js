/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// nums1<nums2
// 时间复杂度m*n
/* var nextGreaterElement = function (nums1, nums2) {
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
}; */
// 官方题解：使用栈将查询结果提前存储
// 时间复杂度m+n
var nextGreaterElement = function (nums1, nums2) { 
    let map = new Map(), stack = [], ans = [];
    nums2.forEach(item => {
        // 如果当前元素大于栈顶元素，将栈顶元素出栈，并将其和后一个元素映射在map里
        // 一直比较当前元素和栈顶元素的关系，直到栈为空
        while(stack.length && item > stack[stack.length-1]){
            map.set(stack.pop(), item)
        };
        // 如果栈为空或者当前元素小于栈顶元素，将其入栈
        stack.push(item);
    });
    for (let i = 0; i < stack.length; i++) { 
        map.set(stack[i],-1)
    }
    // stack.forEach(item => map.set(item, -1));
    for (let j = 0; j < nums1.length; j++) { 
        ans.push(map.get(nums1[j]))
    }
    // nums1.forEach(item => ans.push(map.get(item)));
    return ans;
}
console.log(nextGreaterElement([4,1,2],[1,3,4,2]))