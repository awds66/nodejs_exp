const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];
//charmap이 부분 신선
rl.on('line',function(line){
    input.push(line);
})
.on('close', function( ){
    let word = input[0];
    let charmap={};
    for(let char of word.toUpperCase()){
        charmap[char]=charmap[char] ? charmap[char] + 1 :1;
    }
    let max = Math.max.apply(null, Object.values(charmap));
    let maxchar='';
    let counter=0;
    for(let char in charmap){
        if(charmap[char]===max){
            maxchar = char;
            counter++;
        }
        if(counter >1){
            console.log("?");
            return;
        }
    }
    console.log(maxchar);

    process.exit();
});
