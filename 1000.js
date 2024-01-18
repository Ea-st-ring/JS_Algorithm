const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input = line.split(' ').map(el => parseInt(el)); // 1 2 3 4
    rl.close();
});
 
let sum = 0;

rl.on('close', () => {
    input.forEach(el => {
      sum += el;
    })
    console.log(sum);
    process.exit();
})
