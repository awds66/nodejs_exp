
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input.map(function(cur){
    return Number(cur);
});


    let max = numbers[0];
    let index=0;
    for(var i=0;i<numbers.length;i++){
        if(max < numbers[i]){
            max = numbers[i];
            index = i;
        }
    }
    console.log(max);
    console.log(index+1);

