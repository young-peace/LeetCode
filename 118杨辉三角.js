/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [];
    if (numRows === 1) { 
        return arr
    }
    for (let i = 0; i < numRows; i++) { 
        let list=[1]
        list[i] = 1
        for (let j = 1; j < i; j++) { 
             list[j]=arr[i-1][j-1]+arr[i-1][j]
        }
        arr.push(list)
    }
    return arr
};
console.log(generate(5))