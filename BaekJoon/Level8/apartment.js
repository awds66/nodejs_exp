
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
})
    .on('close', function () {
        let count=0;
        let case_num = input.shift();
        while(count<case_num){

            let floor= input.shift();
            let room_no = input.shift();
            
            let apartment_floor= [];
            
            for(var i=0;i<=floor ; i++){
               apartment_floor.push([1]);
                for(var j=1; j< room_no;j++){
                    if(i===0){
                        apartment_floor[i].push(j+1);
                    }
                    else{
                        apartment_floor[i].push(apartment_floor[i][j-1]+apartment_floor[i-1][j]);
                    }
                }
            }
            console.log(apartment_floor[floor][room_no-1]);
            count++;
        }

        process.exit();

    });