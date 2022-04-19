var repeatedSubstringPattern = function (s) {
   //超时
    // 使用双指针+反向字符串
    // let si = "";
    // let sj = "";
    // let n= s.length
    // for (let i = 0,j=n-1; i<=n/2,j>=n/2; i++,j--) { 
    //     // let si = s.slice(0, i+1);
    //     // let sj=s.slice(j,n-1)
    //     si += s[i];
    //     sj += s[j]
    //     if (si === sj.split("").reverse().join("")) { 
    //         if (n % (i+1) === 0) {
    //             let num = n / (i+1);
    //             let sum=""
    //             for (let k = 0; k < num; k++) { 
    //                 sum+=si
    //             }
    //             if (sum === s) { 
    //                 return true;
    //             }
    //         } 
    //     }
    // }
    // return false;
    let len = s.length
    const next = new Array(len).fill(0);
      /**
          i：当前子串的后缀末尾
          j：上一项子串最长相等前后缀的下一项 或者 0 ，并且也是 上一项子串最长相等前后缀的长度

          i从1开始，j从0开始。因为 i 和 j都是0的话只有一个，肯定是0，相当于上面例子中的 a
      */
    for (let i = 1, j = 0; i < len; i++) {1
        // whild循环，要不断的向上寻找。
        while (j > 0 && s[i] !== s[j]) {  
            // 如果不同，我们要从未匹配好的地方开始继续匹配。
            // 未匹配好的位置在那里呢？👇
            // 我们知道 next 数组的值就代表每一次子串匹配好的长度，
            // 因为数组是从0开始的，所以该值就指向了未匹配好的位置。
            // 当j === 0时，说明要从头开始重新匹配了
            j = next[j - 1];
        }
        // 如果当前子串前后缀相等，就将更新子串，j++ i++
        if (s[i] == s[j]) {
            j++;
        }
        // 将当前子串的最长相等前后缀添加到next数组中
        next[i] = j;
    }
  /**
          a   s   d   a   s   d   a   s   d
          0   0   0   1   2   3   4   5   6       next数组

      我们可以看出如果s是由子串重复构成的话，会从第二个子串开始有最长相等前后缀，并且len - 6 就是一个字串的长度 也是第一个字串
      如果这个长度可以被整除，就说明整个字符串就是这个周期的循环。
  */
  if(next[next.length - 1] !== 0 && len % (len - next[next.length - 1]) === 0) return true            

  return false
};

console.log(repeatedSubstringPattern("abaababaab"))


var repeatedSubstringPattern = function (s) {
    const n = s.length;
    for (let i = 1; i < n; i++) {
        let substr = s.substr(0, i);
        if (n % substr.length === 0) {
            let repeat = n / substr.length;
            if (substr.repeat(repeat) === s) {
                return true;
            }
        }
    }
    return false;
};
