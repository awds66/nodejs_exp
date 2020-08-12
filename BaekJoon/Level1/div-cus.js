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
    var a = input[0];
    var b = input[1];
    var c = input[2];

    console.log((a+b)%c);
    console.log(((a%c)+(b%c))%c);

    console.log((a*b)%c);
    console.log(((a%c)*(b%c))%c);

    process.exit();
});
