/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
     const symbolValues = new Map();
     symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
     symbolValues.set('M', 1000);  
    
     let ans = 0;
     const n = s.length;
     for (let i = 0; i < n; ++i) { 
        //  从映射表中取出对应的值
         const value = symbolValues.get(s[i]);
        //  如果这个字符不是最后一个字符并且当前罗马数字小于后一个数字
         if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
             ans -= value;
         } else { 
             ans += value;
         }
     }
     return ans;


};