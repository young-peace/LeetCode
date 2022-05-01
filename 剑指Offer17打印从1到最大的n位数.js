/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
    let max = ''
    const res = []
    while (n--) max += '9'
    for (let i = 1, l = max - '0'; i <= l; i++) res.push(i)
    return res
};
console.log(printNumbers([1,2,3,4,5,6,7,8,9]))