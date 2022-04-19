var licenseKeyFormatting = function (s, k) {
    let str = s.toUpperCase().match(/[A-Z0-9]+/g)
    if(str!==null){
        str=str.join("")
        let stk=[]
        let n=str.length
        while (n-k > 0) { 
            let l=str.slice(n-k, n)
            stk.unshift('-' + l)
            n=n-k
        }
        stk.unshift(n>=0?str.slice(0,n):'')
        return stk.join("");
    }
    return ""
};
console.log(licenseKeyFormatting("---",3))