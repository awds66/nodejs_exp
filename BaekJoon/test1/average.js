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
    let numbers = [];
    let sum =0;

    numbers=input;

    for(var i=0;i<input.length;i++){
        if(input[i]<40){
            sum = Number(sum) +Number(40);
        }else{
            sum = Number(sum) +Number(input[i]);
        }
    }

    console.log(sum/5);

    process.exit();
});
