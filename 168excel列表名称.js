// 字符串
// diffcult
// 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
// 16进制
convertToTitle = function (columnNumber) {
    const s = []
    let base = 'A'
    while (columnNumber > 0) {
        // 进制转换从0开始，这个是从1开始的，所以需要减一
        columnNumber--;       
        let num = columnNumber % 26 + base.charCodeAt()
        s.unshift(String.fromCharCode(num))
        columnNumber=Math.floor(columnNumber/26)
    }
    return s.join("")
}
console.log(convertToTitle(701))
