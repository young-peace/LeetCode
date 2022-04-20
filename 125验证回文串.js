// 字符串
// 正则匹配+reverse
// var isPalindrome = function(s) {
//     // 对字符串预处理，返回数组
//     let str=s.toLowerCase().match(/[a-z0-9]+/g)
//     // 处理后如果为空返回true
//     if(!str){
//         return true
//     }
//     let res=str.join("")
//     let re=res.split("").reverse().join("")
//     return re===res
// };

// 双指针+正则
var isPalindrome = function (s) { 
    let str = s.toLowerCase().match(/[a-z0-9]+/g)
    let l = str.length;
    if(!str){
        return true
    }
    // 前后遍历字符串比较是否相同，比较一半即可
    for (let i = 0, j = l - 1; i, j < Math.floor(l / 2); i++, j--) { 
        if (s[i] !== s[j]) { 
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))