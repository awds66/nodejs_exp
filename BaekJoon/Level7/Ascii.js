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
    let character = input[0];
    let ascii;

    ascii = character.charCodeAt(0);

    console.log(ascii);

    process.exit();
});
