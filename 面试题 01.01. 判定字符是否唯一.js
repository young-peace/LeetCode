/* 
位运算
1.
我们假设一个全是0的数mark：000...00，共26位，每一位代表一个字母
从后往前数，每一位1代表一个字母，例如
a 000...01 
b 000...10
...
z 100...00
abz 100...11
2.
数字1左移几位，从后往前数第即为就会为1
1<<0，000...01
1<<1，000...10
...
1<<25，100...00
3.
将每个数字&运算，最后哪个位置为1，就说明那个字符重复出现过了
算法：
（1）遍历把字符串中每个字符转化为一个二进制数
（2）计算这个字符距离a即97的距离，这个距离代表我们要唯一的距离
*/
var isUnique = function (astr) { 
    var mark = 0;
    for (var char of astr) { 
        // 计算要移动的位数
        var move_bit = char.charCodeAt() - 97;
        // 与运算
        if ((mark & (1 << move_bit)) !== 0) { 
            return false;
        }
        // 不重复，mark与左移结果进行或运算，相当于保存该值
        mark=mark|(1<<move_bit)
    }
    return true;
}
console.log(isUnique("leetcode"))