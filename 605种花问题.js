/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 刷友题解
// 反思：不知道怎么考虑边界情况
var canPlaceFlowers = function (flowerbed, n) {
    let index = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        // if (flowerbed[i] === 0) { 
        //     if (i === 0 && flowerbed[i+1]===0  ) { 
        //         flowerbed[i] = 1;
        //         index++;
        //         continue;
        //     }
        //     if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) { 
        //         flowerbed[i] = 1;
        //         index++;
        //         continue;
        //     }
        //     if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) { 
        //         flowerbed[i] = 1;
        //          index++;
        //      }
        // } 
        // 用!=1而不是!=0，来考虑第一个位置和最后一个位置的特殊情况
        let left=flowerbed[i - 1] 
        if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1 && flowerbed[i] === 0) { 
            index++;
            // 当前位置种了后一位置就不能种了
            i++;
        }
    }
    return index >= n;
}; 
console.log(canPlaceFlowers([1,0,0,0,1,0,0],2))