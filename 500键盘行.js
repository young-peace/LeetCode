//easy
// 查找
var findWords = function (words) {
    // 用每个words去依次对比每行的字母，如果words中的字母有不在这行的就退出去看是否在下一行
    // 这个words如果对所有行都不满足条件的话就开始遍历下一个words
    var arr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    var res = []
    for (let i = 0; i < words.length; i++) {
        let si = words[i].toLowerCase().split("");
        let k = 0;
        let j = 0;
        while (j < si.length && k <= 2) {
            // 如果当前的words里有不存在当前行的字母
            if (arr[k].indexOf(si[j]) === -1) {
                // 寻找下一行是否匹配
                k++;
                // 重新从头开始遍历
                j = 0;
            } else {
                // 如果当前words里的字母存在当前行，比较下个字母是否存在当前行
                j++;
                // 如果遍历到最后一个字母，整个words都匹配的话就记录这个words
                if (j === si.length) {
                    res.push(words[i])
                }
            }
        }
    }
    return res
};

// 官方题解，给每个字母都标上对应的行号，查看words中的字母行号是否相同
// 反思：本人解法属于暴力解法，官方的解法妙在找出了规律&没用关键API
// 判断字母是否在这一行，那么对这一行的字母就是一个共性
var findWords = function(words) {
    const list = [];
    // 在26个字母的位置写上对应的行号
    const rowIdx = "12210111011122000010020202";
    for (const word of words) {
        let isValid = true;
        // idx的值为words第一个字母对应的行号
        const idx = rowIdx[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()];
        for (let i = 1; i < word.length; ++i) {
            // 如果当前words除其它的字母与第一个字母的行号不同，就给它一个false的flag
            // 反思：只要有一个不满足条件直接给标记flag，之后查看标记flag即可，不用做遍历终止条件的判断
            if (rowIdx[word[i].toLowerCase().charCodeAt() - 'a'.charCodeAt()] !== idx) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            list.push(word);
        }
    }
    return list;
};
console.log(findWords(["adsdf","sfd"]))