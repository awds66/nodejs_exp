const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

let input=[];

rl.on('line',function(line){
    input.push(Number(line));
})
.on('close', function( ){
    let numbers = [];
    let sum =0;
    let food_price =0;
    let drink_price =0;

    numbers=input;
    food_price = input[0];
    drink_price = input [3];
    for(var i=0;i<3; i++){
        if(food_price > input[i]){
            food_price = input[i];
        }
    }

    if(drink_price > input[4]){
        drink_price = input[4];
    }

    console.log(Number(food_price) + Number(drink_price)-50);

    process.exit();
});
