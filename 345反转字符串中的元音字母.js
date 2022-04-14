// 字符串查找
// 双指针从头到尾，从尾到头查找，对比匹配
// 方法一 使用indexOf
// 时间复杂度：O(n)，最坏的情况是把字符串从头到尾和从尾到头遍历一遍
// 空间复杂度：O(1)，直接在字符串上可以进行修改，无需另开辟空间
var reverseVowels = function (s) {
    let str=s.split("")
    let n = str.length
    let i = 0, j = n - 1
    arr = ['a', 'i', 'o', 'u', 'e', 'A', 'I', 'O', 'U', 'E']
    // 不只一对需要交换的字符
    while (i < j) {
        while (i < n && arr.indexOf(str[i])===-1) {
            i++;
        }
        while (j > 0 && arr.indexOf(str[j]) === -1) {
            console.log(str[j])
            j--;
        }
        // 这里有可能i找到最后一个正好是j
        if (i < j) {
            [str[i], str[j]] = [str[j], str[i]]
            i++;
            j--;
        }
    }
    return str.join("")
};
// 方法二 使用set
var reverseVowels = function (s) {
    let str=s.split("")
    let n = str.length
    let i = 0, j = n - 1
    set = new Set(['a', 'i', 'o', 'u', 'e', 'A', 'I', 'O', 'U', 'E'])
    while (i < j) { 
        if (set.has(str[i])) {
            if (set.has(str[j])) { 
                [str[i], str[j]] = [str[j], str[i]]
                i++;
            }
            j--;
        } else { 
            i++;
        }
    }
    return str.join("")
}
console.log(reverseVowels('sssto'))

