/**
 * @param {number[]} numbers
 * @return {number}
 */
// 遍历数组，前一个和后一个对比大小
/* var minArray = function (numbers) {
    let n = numbers.length;
    for (let i = n - 1; i > 0; i--) { 
        if (numbers[i] < numbers[i - 1]) { 
            return numbers[i];
        }
    }
    return numbers[0];
}; */
// 定制的二分查找
// 失败
/* var minArray = function (numbers) {
    let n = numbers.length;
    let left = 0, right = n - 1, mid = Math.floor(n / 2);
    // if (n === 1) return numbers[0];
    while (left < n - 1 && right > 0 && right!==left) { 
        if (numbers[mid] < numbers[left]) {
            left = mid - 1;
            while (numbers[left] <= numbers[mid] && left!==0) {
                left--;
                mid--;
            }
            return numbers[mid];
        } else if (numbers[mid] >= numbers[right] && right!=mid) {
            right = mid + 1;
            while (numbers[right] > numbers[mid] && right!=n-1) {
                right++;
                mid++;
            }
            return numbers[right];
        } else { 
            return numbers[left];
        }
    }
    return numbers[mid]
}; */
// 官方题解：二分查找+暴力
// 反思：不用想那么多用mid和left和right都去做比较，用mid和right去比较
// 应该对有重复和没重复的进行分情况讨论，不要想着步子迈太大，一个一个元素的缩小
// 若没有重复元素：如果mid>right，那么说明mid的前面是有序的，反之，mid的后面是有序的
// 退出循环的条件为：right===left
// 有重复元素：暴力的从右向左缩小范围，right--
var minArray = function (numbers) {
    let left = 0, right = numbers.length - 1;
    if (right === 0) { 
        return numbers[0];
    }
    while (left < right) { 
        let mid = Math.floor(left + (right - left) / 2);
        if (numbers[mid] > numbers[right]) {
            left = mid + 1;
        } else if (numbers[mid] < numbers[right]) {
            right = mid;
        } else if (numbers[mid] === numbers[right]) { 
            right--;
        }
    }
    return numbers[left];
};
/* 三个问题
1.为什么right--不会结果产生影响
-产生影响的条件：删除的元素为唯一最小元素
-执行条件：numbers[right]==numbers[mid]
-矛盾
2.为什么right=mid而left=mid+1
-一般的二分查找right=mid+1,这时候已经能确定mid所指的元素并非查找元素
-而此时的二分解法，numbers[mid]>numbers[right]时，mid肯定不是最小值，所以可以left=mid+1;
-而当numbers[mid]<numbers[right]时，mid有可能是最小值，所以right=mid
3.时间/空间复杂度是多少
-时间复杂度，考虑极端情况
--没有重复数字，与二分相同O(logN)
--全是重复数字，O(N)
-空间复杂度
--只有三个指针，O(1)
 */
console.log(minArray([1]))