/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let n = candies.length, max=candies[0];
    for (let i = 0; i < n; i++) { 
        if (max < candies[i + 1]) { 
            max = candies[i+1];
        }
    }
    for (let i = 0; i < n; i++) { 
        if (candies[i] + extraCandies >= max) {
            candies[i] = true;
        } else { 
            candies[i] = false;
        }
    }
    return candies;
};
console.log(kidsWithCandies([2,3,5,1,3],3))