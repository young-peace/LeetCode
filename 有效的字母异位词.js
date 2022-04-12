var isAnagram = function (s, t) {
    if (s.length !== t.length) { 
        return false
    }
    let hashset = new Array(26).fill(0)
    let base='a'.charCodeAt()
    for (let i of s) { 
        hashset[i.charCodeAt() - base]++;
    }
    for (let i of t) { 
        if (!hashset[i.charCodeAt() - base]) { 
            return false
        }
        hashset[i.charCodeAt() - base]--;
    }
    return true;
};
console.log(isAnagram("anagramm","nagaaram"))