const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
});

rl.on("close", () => {
  let first = input[0];
  let second = input[1];
  let third = input[2];
  if (first === second && second === third) {
    console.log(10000 + first * 1000);
  } else if (first === second || first === third) {
    console.log(1000 + first * 100);
  } else if (second === third) {
    console.log(1000 + second * 100);
  } else {
    console.log(Math.max(first, second, third) * 100);
  }
  process.exit();
});
