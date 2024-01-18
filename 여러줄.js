const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input.push(line);
});
 
rl.on('close', () => {
    console.log(input);
    process.exit();
})
 
// 입력
// 1
// 2
// a
// b
 
 
// 출력 
// ['1', '2', 'a', 'b']