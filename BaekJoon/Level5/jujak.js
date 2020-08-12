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
    let scores = [];
    let num_cnt=input[0];
    let jujak_score = [];
    let hiscore;
    let sum=0;
    scores = input[1].split(' ');

    hiscore = Math.max.apply(null, scores);

    for(var i=0;i< num_cnt ; i++){
        jujak_score[i] = scores[i]/hiscore*100;
    }
    for(var j=0;j<num_cnt;j++){
        sum = sum + Number(jujak_score[j]);
    }
    
    console.log(sum/num_cnt);

    process.exit();
});