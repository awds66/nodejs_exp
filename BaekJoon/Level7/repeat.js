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
    let case_count = input[0];
    let case_num;
    let case_word = [];
    let word = "";
    //배열에 저장
    for(var i=1; i<=case_count;i++){
        case_word[i-1] = input[i].split(' ');
    }

    // console.log(case_word);
    //배열 탐색
    for(var j=0;j<case_word.length;j++){
        //숫자를 읽자
        case_num = case_word[j][0];

        for(var k=0;k<case_word[j][1].length;k++){
            //N번 반복해서 글자 더하기
            for(var i=0;i<case_num;i++){
                word = word + case_word[j][1][k];
            }
        }
        console.log(word);
        word="";
    }

    process.exit();
});
