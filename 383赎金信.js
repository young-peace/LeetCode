var canConstruct = function (ransomNote, magazine) {
    let r = ransomNote.split(""), m = magazine.split("")
    let rmap=new Map(26).fill(0),mmap=new Map(26).fill(0)
    while (i < r.length) { 
        if (m.indexOf(r[i])===-1) { 
            return false;
        }
        i++;
    }
    return true;
};
console.log(canConstruct('aa','aab'))