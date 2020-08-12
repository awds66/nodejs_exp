const readline = require("readline");
const { isRegExp } = require("util");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input.push(line);
})


.on('close', function( ){
   
    let case_cnt=input[0];
    let case_ox = [];

    let correct_num=0;
    let correct_sum=0;


    for(var i=1; i<input.length;i++){
        case_ox[i-1] = input[i];
    }
    for(var j=0;j<case_ox.length;j++){
    
        for(k=0; k<case_ox[j].length;k++){
            if(case_ox[j][k] =='O'){
                
                correct_num = correct_num+1;
            }
            else{
                correct_num=0;
                
            }
            correct_sum =correct_sum +correct_num;
        }
        console.log(correct_sum);
        correct_num=0;
        correct_sum=0;
    }
    

    process.exit();
});