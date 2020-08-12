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
    let num = Number(input);

    let cycle =0;
    let temp = num;
    let step= 0;
    let process_TF=true;

    while(process_TF){
        cycle++;
        if(temp < 10){
            step = temp % 10;
        }
        else{
            step = Math.floor(temp /10)+(temp%10);
        }
        temp = (temp%10).toString() + (step%10).toString();
        temp = Number(temp);
        if(temp === num){
            process_TF = false;
        }
    }
    console.log(cycle);

    process.exit();
});