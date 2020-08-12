const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input=line.split('\n').map((el)=>parseInt(el));
})
.on('close', function( ){
    var j = input[0];
    var star="";

    for(var i=0; i<j;i++){
        star=star+'*';
        console.log(star);
    }
    process.exit();
});
