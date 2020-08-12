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
    let process_TF=true;
    let k=0;
   
    while(process_TF){
        if(k==input.length){
            process_TF = false;
        }
        else{
            numbers.push(input[k].split(' '));
            console.log(Number(numbers[k][0]) + Number(numbers[k][1]));    
        }
        k++;
    }
    process.exit();
});