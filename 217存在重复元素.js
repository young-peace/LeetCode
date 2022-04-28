/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     let map = new Map();
     for (let num of nums) { 
         if (!map.has(num)) {
             map.set(num, 1)
         } else { 
             let counts = map.get(num);
             counts++;
             map.set(num, counts)
             if (counts >= 2) { 
                 return true;
             }
         }
     }
     return false;
};
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))