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
  input.shift();
  input.forEach((el) => {
    let result = [];
    el.forEach((el) => {
      let chars = el.split("");
      chars = chars.reverse();
      result.push(chars.join(""));
    });
    console.log(result.join(" "));
  });
  process.exit();
});
