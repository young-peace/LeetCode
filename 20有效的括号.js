// 字符串
// 匹配，利用hash表
var isValid = function (s) {
    const n = s.length;
    // 括号必须是成对出现的
    if (n % 2 === 1) {
        return false;
    }
    // 将匹配的括号存入hash表，反着存，将遇到的左括号存入栈，
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s) {
        // 如果hash表里有这个括号key
        if (pairs.has(ch)) {
            // 如果这时栈为空 || 栈顶的值！=hash表里的value，那么这个括号的值就没有可匹配的值 || 匹配不上
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            // 匹配一个弹出一个
            stk.pop();
        } 
        else {
            // 没有这个匹配值（可能是无效值或左括号），进栈
            stk.push(ch);
        }
    };
    // 匹配的值都弹完了，留下的就是无效值
    return !stk.length;
};
console.log(isValid("()"))