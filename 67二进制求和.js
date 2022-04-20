// 字符串

// （1）对应位相加
// （2）进位相加
// （3）相加结果拼接 
    var addBinary = function(a, b) {
    // 记录最后结果
    let ans = ""; 
    // 记录是否有进位
    let ca = 0;
    // 从后往前遍历两个数（从后往前加）
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        // 两数对应位每次相加时都要加上上一位的进位
        let sum = ca;
        // 字符串转数字
        sum += i >= 0 ? parseInt(a[i]) : 0;
        // 字符串转数字同时两位相加
        sum += j >= 0 ? parseInt(b[j]) : 0;
        // 计算结果字符串拼接，计算结果sum%2转为二进制，实际结果
        ans += sum % 2;
        // 计算两数之和是否有进位
        ca = Math.floor(sum / 2);
    }
    // 最后两位的进位，这时长度满足退出，只能单独处理
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
};
let a="1010",b="1011"
console.log(addBinary(a,b))