convertToTitle=function(columnNumber) {
    const s = []
    let base = 'A'
    while(columnNumber>0){
        columnNumber--;       
        let num = columnNumber % 26 + base.charCodeAt()
        s.unshift(String.fromCharCode(num))
        columnNumber=Math.floor(columnNumber/26)
    }
    console.log(s)
    console.log(s.join(""))
    return s.join("")
}
console.log(convertToTitle(701))
