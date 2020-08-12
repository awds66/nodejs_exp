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
    let word = input[0];
    let word_alpha = [];
    let alpha;
    let counter = [];
    let result = "";

    for(var j=97; j<=122;j++){
        alpha= String.fromCharCode(j);
        for(var i= 0; i<word.length; i++){
            counter[j-97]=word.indexOf(alpha);
        }
    }
    for(var k=0; k<counter.length;k++){
       result =  result +counter[k].toString() + " ";
    }
    console.log(result);

    process.exit();
});
