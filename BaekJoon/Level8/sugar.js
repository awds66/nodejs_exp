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
    let three=0;
    let target = input[0];

    while(true){
        if(target%5==0){
            console.log(Number(target/5) + Number(three));
            break;
        }
        else if(target<=0){
            console.log(-1);
            break;
        }
        target = target -3;
        three++;
    }
    
    process.exit();
});
