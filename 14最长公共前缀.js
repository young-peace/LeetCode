// 标签：字符串
// 匹配，自己和自己比
var longestCommonPrefix = function (strs) {
    let ans=strs[0]
    for(let i=1;i<strs.length;i++){      
        // 同时遍历两个单词，ans是第一个，strs[i]是第二个
        let j = 0
        for (; j < ans.length && j < strs[i].length; j++){
            // 如果两个单词里有哪个字母出现了不匹配，开始ans和下一个单词的比较
            if(ans[j]!==strs[i][j]){
                break;
            }                
        }
        // 记录和上一个单词匹配的部分，这个公共部分只少不多
        ans=ans.substr(0,j);
        if(ans===''){
            return ans;
        }
    }
    return ans
};
var strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))