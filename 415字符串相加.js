var addStrings = function(num1, num2) {
    let ca=0;
    let ans="";
    for(let i=num1.length-1,j=num2.length-1;i>=0||j>=0;i--,j--){
        let sum=ca;
        sum+=i>=0?parseInt(num1[i]):0;
        sum+=j>=0?parseInt(num2[j]):0;
        ans+=sum%10;
        ca=Math.floor(sum/10);
    }
    ans+=ca==1?ca:""
    return ans.split("").reverse().join("")
};
console.log(addStrings("11","123"))