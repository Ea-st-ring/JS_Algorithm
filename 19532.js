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
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (
        input[0] * x + input[1] * y === input[2] &&
        input[3] * x + input[4] * y === input[5]
      ) {
        console.log(x, y);
        break;
      }
    }
  }
  process.exit();
});
