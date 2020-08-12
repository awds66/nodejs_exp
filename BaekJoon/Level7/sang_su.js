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
    let num = input[0].split(' ');
    let temp='';

    for(var i=0;i<num.length;i++){

        for(var j=num[i].length-1;j>=0;j--){
        
            temp=temp+num[i][j];

        }
        // console.log(temp);
        num[i]=Number(temp);
        temp= '';
    }
    if(num[0]>num[1]){
        console.log(num[0]);
    }
    else{
        console.log(num[1]);
    }
    // console.log("reversed : " + num);


    process.exit();
});