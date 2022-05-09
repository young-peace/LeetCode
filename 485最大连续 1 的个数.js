/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
     let index=0,max=0;
     for (let i = 0; i < nums.length; i++) { 
         if (nums[i] === 1) {            
             index++;
             max=Math.max(index,max)
         } else { 
             index=0;
         }
         
     }
     return max
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))