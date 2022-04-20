/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 var isAnagram = function(s, t) {
    // 因为字符出现的次数都相同，所以首先字符串长度一定都相同
    if(s.length!==t.length){
        return false;
    }
    // 用哈希表校对每个字符的数量
    // 哈希表长度为26，初始每个字符的数量都为0
    let hashset=new Array(26).fill(0);
    let base='a'.charCodeAt();
    for(let i of s){
        // 每个字母都有对应的位置，每出现一次，值就加一
        hashset[i.charCodeAt()-base]++;
    }
    for(let i of t){
        // 如果t字符串中没有出现s字符串中的字母，return false
        // 如果t字符串出现的字母数量
        if(hashset[i.charCodeAt()-base]===0){
            return false;
        }
        hashset[i.charCodeAt()-base]--;
    }
    return true;
};
console.log(isAnagram("anagramm","nagaaram"))