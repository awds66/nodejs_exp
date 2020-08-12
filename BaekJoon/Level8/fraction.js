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
    let number = input[0];
    let count =0;
    
    while(number>0){
        count++;
        number=number - count;
    }
    if(count %2==0){
        console.log(count+number +"/"+ (1+(-number)));
    }
    else{
        console.log(1+(-number) +"/"+(count+number) );
    }

    process.exit();
});
