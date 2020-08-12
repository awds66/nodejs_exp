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

    //10개의 숫자를 입력 받은 후 
    var result = [];
    var result_rest = [];
    var counter=0;

    for(var i=0;i<input.length;i++)
    {
        result[i]=input[i]%42;
    }
    
    //만약 result_rest에 같은 결과가 없으면 푸시 + Counter + 1
    //있으면 넘어감
    for(var j=0;j<result.length;j++)
    {
        var tft;
        tft=result_rest.indexOf(result[j]);
        if(tft==-1){
            result_rest.push(result[j]);
            counter = counter+1;
            // console.log("hit! : " + result[j]);
        }
    }
    console.log(counter);
    process.exit();
});