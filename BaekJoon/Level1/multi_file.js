var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

function solution(a , b){
    var temp = b;
    while(temp>0){
        console.log(a * (temp% 10));
        temp/=10;
    }
    console.log(a * b);
}
solution(a,b);
