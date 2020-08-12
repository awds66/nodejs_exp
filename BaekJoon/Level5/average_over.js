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
    let case_num=input[0];

    let scores = [];
    let avrs = [];
    let case_avr=0;
    let case_cnt=0;
    let case_sum=0;
    
    for(var i=1;i<input.length; i++){
        scores[i-1] = input[i].split(' ');
    }
    //각 case별로 평균값 계산후 avrs에 저장
    for(var j=0; j<scores.length;j++){
        for(var k=1; k<scores[j].length;k++){
            case_sum= case_sum + Number(scores[j][k]);
        }
        case_cnt = scores[j][0];
        case_avr = case_sum / case_cnt;
        
        avrs.push(case_avr);

        case_sum=0;
    }

    let stu_cnt=0;

    //각 평균값과 점수를 비교하여 학생 카운트
    for(var i=0; i<scores.length;i++){
        for(var j=1;j<scores[i].length;j++){
            if(scores[i][j]>avrs[i]){
                stu_cnt = stu_cnt+1;
            }
        }
        console.log((Number(stu_cnt/scores[i][0]*100)).toFixed(3)+"%");

        stu_cnt =0;

    }


    process.exit();
});
