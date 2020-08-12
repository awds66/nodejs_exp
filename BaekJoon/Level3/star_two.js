const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input=line.split('\n').map((el)=>parseInt(el));
})
.on('close', function( ){
    var input_num=input[0];
    var text="";

    for(var i=0;i<input_num;i++){
        for(var j=0;j<input_num;j++){
            if(j<input_num-i-1){
                text= text+" ";
            }
            else{
                text = text+ "*";
            }
        }
        console.log(text);
        text="";
    }
    process.exit();
});
