/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 将数组转化为数字再加会溢出，此种方法不可行，只能在数组上加
// 如果digital的末尾不是9，那么直接在最后一位加一返回
// 如果digital的末尾连续是9，那么找到最后一位不是9的位置，将其+1，然后把之后的连续9都置为0
// 如果都是9，那么长度+1，全置为0，将第一位置为1 

var plusOne = function (digits) {
    let n = digits.length;
    for (let i = n - 1; i > 0; i++) { 
        // 逆序寻找第一个不为9的数字
        if (digits[i] !== 9) { 
            ++digits[i];
            for (let j = i+1; j <n; j++) { 
                digits[j] = 0;
            }
        }
        return digits
    }
    // digital中的元素都为9
    const ans = new Array(n + 1).fill(0)
    ans[0] = 1;
    return ans;

};
console.log(plusOne([1,9,3,4]))