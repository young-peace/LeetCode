/**
 * @param {number[]} stones
 * @return {number}
 */
// 递归
 var lastStoneWeight = function(stones) {
     stones.sort((a, b) => a - b);
     if (stones.length>1) { 
         let a=stones.pop()-stones.pop();
         if (a) { 
             stones.push(a);
         }
         return lastStoneWeight(stones)
     }
     return stones.length ? stones[0] : 0;
};
console.log(lastStoneWeight([2,7,4,1,8,1]))