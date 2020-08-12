const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input=line.split(' ').map((el)=>parseInt(el));
})
.on('close', function( ){
    let numbers = [];
    //let temp;
    for(var i=0; i<input.length;i++){
        numbers.push(Number(input[i]));
    }

    numbers.sort();

    console.log(numbers[1]);

    process.exit();
});
