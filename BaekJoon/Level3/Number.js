const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input=line.split('\n').map((el)=>parseInt(el));
})
.on('close', function( ){
    
    var j = input[0]

    for(var i=1; i<=j;i++){
        console.log(i);
    }
    process.exit();
});
