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
    let numberStr = input[1].split(' ');
    let count = input[0];

    let numbers = numberStr.map(function(cur){
        return Number(cur);
    });
    
    numbers.sort((a,b) => b-a);

    console.log(numbers[count-1] + " " +numbers[0]);
    
    process.exit();
});
