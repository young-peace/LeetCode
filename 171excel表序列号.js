/**
 * @param {string} columnTitle
 * @return {number}
 */

// 16进制转换，字母转数字
var titleToNumber = function(columnTitle) {
    base='A'
    lists = columnTitle.split("");
    let ans = 0;
    while(lists.length){
        let s = lists.shift();
        // 先求出第一位的差值，当有第二位时，再将第一位第二位一起算
        ans = ans * 26 + (s.charCodeAt() - base.charCodeAt() + 1);
    }
    return ans;
};
console.log(titleToNumber('ZY'))