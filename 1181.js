const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => el));
});

rl.on("close", () => {
  let newInput = [];
  input.shift();
  input.forEach((el) => {
    if (!newInput.includes(el[0])) {
      newInput.push(el[0]);
    }
  });
  newInput.sort((a, b) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    if (a < b) return -1;
    if (a > b) return 1;
    
    return 0;
  });
  console.log(newInput.join("\n"));
  process.exit();
});
