const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input.push(line.split(' ').map(el => parseInt(el)));
});
 
rl.on('close', () => {
    let sum = input[0][0]
    input.shift();
    input.shift();
    let realSum = 0;
    input.forEach(el => {
        realSum += el[0] * el[1]
    })
    if (sum === realSum) {
        console.log('Yes');
    } else {
        console.log('No');
    }
    process.exit();
})