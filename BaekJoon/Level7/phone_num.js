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
    let dial_set = [['A','B','C'],['D','E','F'],['G','H','I'],
    ['J','K','L'],['M','N','O'],['P','Q','R','S'],['T','U','V'],['W','X','Y','Z']];
    let point=0;
    let total_time=0;

    let number = input[0];
    for(var i=0; i<number.length; i++){
        for(var j=0; j<dial_set.length;j++){
            if(dial_set[j].includes(number[i]))
            {
                point = j+3;                
            }
        }
        total_time =total_time + point;
        
    }
    console.log(total_time);

    process.exit();
});