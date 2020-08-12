const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input=line.split(' ').map((el)=>parseInt(el));
})
.on('close', function( ){
    var minute=input[1]; 
    var hour=input[0];

    if(hour>=0&&minute>=45){
        minute = minute - 45;
    }
    else if(hour>0 && minute < 45){
        hour-=1;
        minute =minute + 60 - 45; 
    }  
    else {
        hour= 23;
        minute= minute + 60 - 45;
    }
    console.log(hour + " "+ minute);
    process.exit();
});
