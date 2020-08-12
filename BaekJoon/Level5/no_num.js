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

    var result = 0;
    var num_arr;
    let counter = [0,0,0,0,0,0,0,0,0,0];
    result = (input[0] * input[1]* input[2]).toString();
    
    num_arr = Array.from(result);
   
    // console.log("계산 결과 : " + result);
    // //계산 결과 확인 하나씩 쪼개서
    // for(var j=0;j<result.length;j++){
    //     console.log( j+ " 번째 : " +result[j]);
    // }
    //문제 개수 세기
    for (var k=0;k<result.length;k++){
        
        counter[result[k]] = counter[result[k]]+1;
    }
    //숫자 출력
    for(var k=0;k<10;k++){
        console.log(counter[k]);
    }
    
    process.exit();
});