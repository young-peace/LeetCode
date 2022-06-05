/**
 * @param {number} x
 * @return {boolean}
 */
/* 
回文数的特点：
1.负数、0、10的倍数，都不可能是回文数
2.利用整数反转来获取反转后的数，若和原数一样，则是回文数
*/
 var isPalindrome = function(x) {
     if (x < 0 || (!(x % 10) && x)) return false;
    //  if (x <= 0 || (!(x % 10) && x)) return false;

     let x2 = x, res = 0;
     while (x2) { 
         res = res * 10 + x2 % 10;
         x2 =parseInt(x2 / 10) ;
     }
     return res === x;
};
console.log(isPalindrome(0))