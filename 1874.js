const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(parseInt(line));
});

rl.on("close", () => {
  let length = input.shift();
  let stack = [];
  let idx = 0;
  for (i = 0; i < length + 1; i++) {
    stack.push(i);
  }
  let result = [];

  for (let target of input) {
    if (target != stack[idx]) {
      while (stack[idx] != target) {
        if (idx > length) {
          console.log("NO");
          process.exit();
        }
        result.push("+");
        idx++;
      }
    }
      stack.splice(stack.indexOf(target), 1);
      idx--;
      result.push("-");
  }
  console.log(result.join("\n"));
  process.exit();
});
