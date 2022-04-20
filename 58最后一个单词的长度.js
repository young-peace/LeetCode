
// 字符串
// 查找
// 反向遍历字符串，找到最后一个字符串并求其长度
var lengthOfLastWord = function (s) {
    let index = s.length - 1;
    // 如果最后一个单词是空格，就将字符串长度减一，直到找到最后一个单词
    while(s[index]===' '){
        index--;
    }
    // 统计最后一个单词的长度
    let slength = 0;
    // 最后一个单词有可能是第一个 && 最后一个单词遍历的终止条件是碰到前面的空格
    while(index>=0 && s[index]!==' '){
        slength++;
        index--;
    }
    return slength;
};
console.log(lengthOfLastWord('hello world '))