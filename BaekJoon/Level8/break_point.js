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



    let plice;
    let profit;
    
    plice = input[0].split(' ');
    profit = plice[2]-plice[1];
    //2억 번이라는 조건이 있어 Count를 올리는 방법은 안됨
    if(profit <= 0){
        console.log(-1);
    }
    else {
        console.log(Math.floor (plice[0]/profit)+1);
    }
    process.exit();
});
