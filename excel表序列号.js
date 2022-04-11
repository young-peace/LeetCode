/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    // lists = columnTitle.split("");
    // // console.log(lists)
    base='A'
    // n=0
    // r=0
    // while (lists.length!==0) {
    //     // console.log(lists)
    //     s = lists.pop();
    //     console.log(s)
    //     r+=(s.charCodeAt()-base.charCodeAt()+1)*(n===0?1:n)
    //     n++;
    //     console.log(r,n)
    // }
    // return r
    lists = columnTitle.split("");
    let ans = 0;
    while(lists.length){
        s = lists.shift();
        console.log(s)
        ans = ans * 26 + (s.charCodeAt() - base.charCodeAt() + 1);
        console.log(n,ans)
    }
    return ans;
};
console.log(titleToNumber('ZY'))