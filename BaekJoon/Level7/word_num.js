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
    let word= input[0].trim().split(' ');
    let count=0;

    for(var i=0;i<word.length;i++){
        if(word[i] !== ''){
            count++;
        }
    }
    console.log(count);
    
    process.exit();
});
