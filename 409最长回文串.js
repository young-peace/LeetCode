var longestPalindrome = function(s) {
    const map = new Map();
    let arr=s.split("")
    let count=0
    for(let a of arr){
        if(map.has(a)){
            map.delete(a)
            count+=2
        }else{
            map.set(a)
        }
    }
    return count+(map.size?0:1)
};
console.log(longestPalindrome("abccccdd"))