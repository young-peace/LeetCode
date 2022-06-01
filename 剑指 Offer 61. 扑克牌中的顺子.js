/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
     let set = new Set();
     let max = 0, min = 14;
     for (let a of nums) { 
         if (a === 0) continue;
         max = Math.max(a, max);
         min = Math.min(a, min);
        //  顺子中没有重复的值
         if (set.has(a)) return false;
         set.add(a);
     }
    //  数组中最大值和最小值的差值小于5才有可能为顺子
     /* 
     如果数组是顺子[1,2,3,4,5]，差值为4
     如果数组有大小王才为顺子，[11,0,9,10,0]，最小差值为3
     所以直接让判断条件差值小于5
     */
     return max - min < 5;
};
console.log(isStraight([4, 7, 5, 9, 2]))