/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = nums.length>>1;
    let map = new Map();
    if (nums.length === 1) return nums[0];
    for (let num of nums) { 
        if (!map.has(num)) {
            map.set(num, 1)
        } else { 
            let counts = map.get(num);
            counts++;
            map.set(num, counts)
            if (counts > count) { 
                return num;
            }
        }
    }
};
console.log(majorityElement([2]))