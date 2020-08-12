const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input.push(line);
})
.on('close', function( ){
    let numberStr = input[1];
    let count = input[0];
    let sum =0;

    for(var i=0;i<numberStr.length; i++){
        sum= sum + Number(numberStr[i]);
        
    }
    
    console.log(sum);
    
    
    process.exit();
});
