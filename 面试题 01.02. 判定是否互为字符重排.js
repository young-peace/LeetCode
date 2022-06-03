/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/* 
两个字符串可以互相重排的条件，那么两个字符串的每个字符出现的次数是相同的
借助哈希表来进行第一个字符串的字符数统计，再对第二个字符串进行比较即可
*/
 var CheckPermutation = function(s1, s2) {
     const counter = new Map;
    //  扫描s1的字符计数
     for (var c of s1) { 
         if (!counter[c]) {
             counter[c] = 1;
         } else { 
             counter[c]++;
         }
     }
    //  扫描s2的字符
     for (var c of s2) { 
         if (!counter[c]) {
             return false;
         } else { 
             counter[c]--;
             if (counter[c] === 0) { 
                 delete counter[c];
             }
         }
     }
     return Object.keys(counter).length === 0;
};