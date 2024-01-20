const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  input.shift();
  input.forEach((el)=>{
    let stack = [];
    let isVPS = 'YES';
    let chars = el.split('');
    chars.forEach((char)=>{
      if (char === '(') {
        stack.push(char);
      } else {
        if (stack.length === 0) {
          isVPS = 'NO';
        } else {
          stack.pop();
        }
      }      
    })
    if (stack.length !== 0) {
      isVPS = 'NO';
    }
    console.log(isVPS);
  })
  process.exit();
});