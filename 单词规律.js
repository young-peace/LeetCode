
// var wordPattern = function (pattern, s) {
//     const word2ch = new Map();
//     const ch2word = new Map();
//     const words = s.split(' ');
//     if (pattern.length !== words.length) {
//         return false;
//     }
//     // 因为两个字符串一样长，用entries()一箭双雕，两个字符串都能遍历，还省去一个字符串加下标
//     for (const [i, word] of words.entries()) {
//     // for (let i = 0; i < words.length;i++){
//         const ch = pattern[i];
//         // pattern和s中的字符存在双射，故使用两个map验证
//         if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
//             return false;
//         }
//         word2ch.set(word, ch);
//         ch2word.set(ch, word);
//     }
//     return true;
// };
// 单射判断
var wordPattern = function (pattern, s) {
    // 先判断长度是否相等
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    // 定义映射表
    const ch2word=new Map()
    // 存储映射关系
    for (const [i, word] of words.entries()) { 
        // 循环遍历pattern，如果有这个字符判断其值是否相同
        const ch=pattern[i]
        if (ch2word.has(ch)) {
            // 如果不同，false
            if (ch2word.get(ch)!==word) { 
                return false
            }
        // 如果没有这个字符，判断其值是否已存在
        } else { 
            for (let i of ch2word.values()) { 
                if (i === word) {
                    return false
                }
            }
            // 如果不存在，将其加入映射表
            ch2word.set(ch,word)
        }       
    }
    return true;
 }
let pattern = 'abba'
let s = "red re re red"
console.log(wordPattern(pattern,s))