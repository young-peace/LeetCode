/* 
kmp算法
例子：
haystack: aabaabaafa
needle: aabaaf

needle:
前缀：不包含末尾的所有字符串
后缀：不包含开头的所有字符串

最长相等的前后缀
a         0，只有一个
aa        1，前缀：0，后缀：0
aab       0，前缀：a，aa，后缀：b，ab
aaba      1，前缀：a，aa，aab，后缀：a，ba，aba
aabaa     2，前缀：a，aa，aab，aaba，后缀：a，aa，baa，abaa 
aabaaf    0，...

next=[0,1,0,1,2,0]，next就是needle的前缀表

1.next中的值代表着当前子串最长相等前后缀的长度
2.next中的值还表示了，下次比对字串开始的位置，
因为最长长度已知，字符串又是从0开始的，所以下一次匹配的时候从最长匹配的下一个，也就是不匹配的位置开始比较
例如：next[4]=2,对应子串为aabaa，最长前后缀为aa
而needle[2]=b,就是下一次要开始匹配的字符，位置为2

代码：
next数组的生成
i，当前字串的后缀末尾
j，上一项字串最长相等前后缀的下一项，也是上一项字串最长相等前后缀的长度
当needle[i]===needle[j]：j++,i++,继续向后匹配
当needle[i]!==needle[j]：从上一次相等前后缀的下一位开始重新匹配，j=next[j-1]
*/
var strStr = function (haystack, needle) { 
    let n = haystack.length;
    let m = needle.length;
    if (m === 0) return 0;

    // next数组第一项是0，所以先fill(0)
    let next = new Array(m).fill(0);
    // j从1开始，i从0开始，直接跳过一个字符的情况
    for (let i = 1, j = 0; i < m; i++) { 
        // j=0时，说明要从头开始匹配了
        //如果不同，从未匹配好的位置开始匹配
        while (j > 0 && needle[i] !== needle[j]) { 
            j = next[j - 1];
        }
        if (needle[i] === needle[j]) { 
            j++;
        }
        next[i] = j;
    }
    
    for (let i = 0, j = 0; i < n; i++) { 
        // 如果当前i 和 j不一致，就回退到上一个相等的位置的下一个看看是否匹配
        // 会不断回退，0为回退到边界，当回退到0意味着要重新从头开始匹配
        while (j > 0 && haystack[i] !== needle[j]) { 
            j = next[j - 1];
        }
        if (haystack[i] === needle[j]) { 
            j++;
        }
         // 当j 和 m的长度相等时，就说明存在
        if (j === m) { 
            return i - m + 1;
        }
    }
    return -1;
}