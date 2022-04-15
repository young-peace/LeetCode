var findTheDifference = function(s, t) {
    // 遍历大的字符串，用大的减小的，减到为0的就是多余的那个
    let arr = new Array(26).fill(0)
    let base='a'.charCodeAt()
    for (let i of s) { 
        // console.log(i)
        arr[i.charCodeAt() - base]++;
    }
    for (let i of t) { 
        if (arr[i.charCodeAt() - base] > 0) {
            arr[i.charCodeAt() - base]--;
        } else { 
            return i
        }
    }
};
console.log(findTheDifference("abc","aebc"))