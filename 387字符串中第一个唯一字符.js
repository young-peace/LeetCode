// var firstUniqChar = function (s) {
//     // list = s.split("")
//     let map=new Map()
//     for (let i in s) {
//         if (map.has(s[i])) {
//             n = map.get(s[i]);
//             map.set(s[i],++n);
//         } else {
//             map.set(s[i], 0);
//         }
//     }
//     for (let i of map.keys()) {
//         if (map.get(i) === 0) {
//             return s.indexOf(i)
//         }
//     }
//     return -1;

// };
var firstUniqChar = function (s) {
    let arr = new Array(26).fill(0)
    base = 'a'.charCodeAt()
    for (let i = 0; i < s.length; i++) {
        // 这种存法相当于存了字母和数量两个值，一个字母一个坑
        arr[s[i].charCodeAt() - base]++;
    }
    // 用数组索引查最后就能返回数组索引
    for (let i = 0; i < s.length; i++) { 
        if (arr[s[i].charCodeAt() - base] === 1) { 
            return i;
        }
    }
    return -1;
}
console.log(firstUniqChar('loveleetcode'))