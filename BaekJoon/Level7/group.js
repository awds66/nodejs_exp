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
    let caseCnt=input[0];
    let Gcnt = 0;
    
    for(var i=1;i<=caseCnt;i++){
        let word = input[i];
        let letter = [];
        let istrue=true;

        for(var j=0;j<word.length;j++){
            if(letter.indexOf(word[j])== -1){
                letter.push(word[j]);
            }
            else{
                if(letter.indexOf(word[j]) != letter.length-1){
                    istrue=false;
                    break;
                }
            }
        }

        if(istrue){
            Gcnt++;
        }
    }
    console.log(Gcnt);
    
    process.exit();
});
