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
    let snail = input[0].split(' ');

    let result= Math.ceil((snail[2]-snail[1])/(snail[0]-snail[1]));

    console.log(result);



    process.exit();
});
