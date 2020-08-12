const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];


String.prototype.replaceAll=function(org, dest){
    return this.split(org).join(dest);
}


rl.on('line',function(line){
    input.push(line);
})
.on('close', function( ){
    let word = input[0];
    let croatia = ['c=','c-','dz=','d-','lj','nj','s=','z='];
    let and;
        for(var i=0; i<croatia.length;i++){
            if(word.includes(croatia[i])==true){

                word = word.replaceAll(croatia[i],'*');
            }
        }
    console.log(word.length);

    process.exit();
});
