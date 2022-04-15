// 字符串查找
// 时间复杂度O(m+n)，分别遍历两个字符串一次
// 空间复杂度O(|S|),|S|=26,S是字符集
// 统计r相对的字符数量是否<=m相对的字符数量
var canConstruct = function (ransomNote, magazine) {
    let r = ransomNote.split(""), m = magazine.split("")
    let mmap = new Array(26).fill(0)
    let base='a'.charCodeAt()
    for (let i of m) {        
        mmap[i.charCodeAt() - base]++;    
    }
    for (let i of r) { 
        if (mmap[i.charCodeAt() - base]<=0) { 
            return false;
        }
        mmap[i.charCodeAt() - base]--;
    }
    return true;
};
console.log(canConstruct('ab','aab'))