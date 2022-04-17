var longestPalindrome = function(s) {
    const map = new Map();
    for(let i = 0; i < s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let result = 0;
    for(let value of map.values()){
        result += Math.floor(value / 2) * 2;
    }
    return result !== s.length ? result + 1 : result;
};
console.log(longestPalindrome("abccccdd"))