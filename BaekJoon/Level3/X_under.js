const getRl=()=>{
    const readline = require('readline');
    return readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });
}
const rl = getRl();

const getAnswers = (N,X,numbers) => {
    const answers = [];

    for(let i=0; i<N; i++){
        const number = parseInt(numbers[i]);
        if(number<X){
            answers.push(number);
        }
    }
    return answers.join(' ');
};

const input = [];
const start = (rl) => {
    rl.on('line', line => {
        input.push(line.split(' '));
    }).on('close', () => {
        const N= parseInt(input[0][0]);
        const X =parseInt(input[0][1]);
        const numbers= input[1];

        console.log(getAnswers(N,X,numbers));
        process.exit();
    });
}

start(rl);

