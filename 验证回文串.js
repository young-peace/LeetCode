// var isPalindrome = function(s) {
//     let valid = s.toLowerCase().match(/[a-z0-9]+/g);// valid为进行正则匹配后筛选出来的数组
//     if(!valid){
//         return true;
//     }
//     console.log(valid)
//     let str = valid.join("");// 数据预处理(正则匹配)后得到的字符串
//     let com = str.split("");// 将字符串翻转
//     let re = com.reverse()
//     let comp=re.join("")
//     return comp === str;
// };
var isPalindrome = function(s) {
    // 对字符串预处理，返回数组
    let str=s.toLowerCase().match(/[a-z0-9]+/g)
    // 处理后如果为空返回true
    if(!str){
        return true
    }
    let res=str.join("")
    let re=res.split("").reverse().join("")
    return re===res
};
let s = "A man, a plan, a canal: Panama"
isPalindrome(s)
