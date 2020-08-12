
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
    let casenum = input[0];
    let hotelcase=[];
    let floor='';
    let room='';
    
    let h=0;
    let w=0;
    let client=0;

    //케이스 마다 호출
    for(var i=1; i<=casenum;i++){
        hotelcase = input[i].split(' ');

        h = hotelcase[0];
        w= hotelcase[1];
        client = hotelcase[2];

        if(client%h==0){
            floor= h+'';
            room=parseInt(client/h)+'';
        }
        else{
            floor =client % h +'';
            room=parseInt(client/h)+1+'';
        }

        if(room.length ==1){
            room = '0' + room;
        }


        console.log(floor+ room);
    }
    
    process.exit();
});