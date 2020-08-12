
//보류 11번
const readline = require("readline");
const { compileFunction } = require("vm");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input=line.split(' ').map((el)=>parseInt(el));
})
.on('close', function( ){
    var a= input[0];
    var b= input[1];
    
    console.log(a*(b%10));
    console.log(a* parseInt(((b/10)%10)));
    console.log(a* parseInt(b/100)%10);
    console.log(a*b);
    
    process.exit();
});
  