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
    let count= 0;
    let temp=0;
    let isfind=true;

    while(isfind){
        
        if(count==0){
            temp=1;
        }
        else{
            temp = temp + count*6;
        }

        if(temp>=number){
            isfind=false;
        }
        count++;
    }
    console.log(count);

    process.exit();
});
