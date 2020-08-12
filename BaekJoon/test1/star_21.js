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
    var j = input[0];
    var star="";

    for(var i=0;i<input[0]*2;i++){

        for(var k=0;k<input[0];k ++){
            if(i%2==0){
                if(k%2!=0){
                    star=star+" ";
                }
                else{
                    star=star +"*";
                }
            }
            else{
                if(k%2!=0){
                    star=star+"*";
                }
                else{
                    star=star +" ";
                }
            }
        }
        console.log(star);
        star="";
    }
    process.exit();
});
