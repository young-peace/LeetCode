/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0], sell = 0;
    for (let i = 1; i < prices.length; i++) { 
        sell=Math.max(sell,prices[i]-min)
        min = Math.min(min, prices[i])
    }
    return sell;
    
};
console.log(maxProfit([7,6,4,3,1]))