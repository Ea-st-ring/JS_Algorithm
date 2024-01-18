const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
});

rl.on("close", () => {
  input.shift();
  let newInput = [];
  input.forEach((el1) => {
    let tmp = [];
    el1.forEach((el2) => {
      if (!isNaN(el2)) {
        tmp.push(parseInt(el2));
      } else {
        tmp.push(el2);
      }
    });
    newInput.push(tmp);
  });
  newInput.sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else if (a[0] < b[0]) {
      return -1;
    }
    return 0;
  });
  console.log(newInput.map((el) => el.join(" ")).join("\n"));
  process.exit();
});
