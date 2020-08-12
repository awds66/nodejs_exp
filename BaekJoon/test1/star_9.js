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
    var num=0;
    
    var lator=0;

    num = 2*input[0]-1;
    lator= input - 2;
    for(var i=0;i<2*input-1; i++){
        if(i<input){
            for(var j=0; j<num;j++){
                if(i>j)
                {
                    star = star + " ";
                }
            
                else{
                    star = star+"*";
                }
            }
            console.log(star);
            
            star= "";
            num--;
        }
        else{
            for(var k=0;k<i+1;k++){
                if(lator<=k){
                    star = star + "*";
                }
                else{
                    star = star + " ";
                }
            }
            lator=lator-1;

            console.log(star);
            star = "";
        }
    
    }
    
    process.exit();
});
