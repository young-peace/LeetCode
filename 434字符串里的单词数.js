var countSegments = function(s) {
    let lists = s.split(" ");
    let n = 0;
    for (let i of lists) { 
        if (i!== '') { 
            n++;
        }
    }
    return n;
};
console.log(countSegments(" "))