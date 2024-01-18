const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
});


rl.on("close", () => {
  let sum = input[0][1] + input[1][0]
  quo = parseInt(sum / 60);
  rem = sum % 60;
  input[0][0] = (input[0][0] + quo) % 24;
  console.log(input[0][0], rem)
  process.exit();
});
