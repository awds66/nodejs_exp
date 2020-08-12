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
    var sum = 0;

    for(var i=1; i<= input[0];i++){
        sum=sum+i;
    }
    console.log(sum);
    
    process.exit();
});
