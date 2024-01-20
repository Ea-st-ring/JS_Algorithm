const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

let black_board = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];

let white_board = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];


rl.on("close", () => {
  const [ yLength, xLength ] = input[0].split(" ").map((el) => parseInt(el));
  input.shift();
  let twodim_Arr = [];
  for (let y = 0; y < yLength; y++) {
    let tmpArr = [];
    for (let x = 0; x < xLength; x++) {
      tmpArr.push(input[y][x]);
    }
    twodim_Arr.push(tmpArr);
  }

  let xIdx = 0;
  let yIdx = 0;
  let white_count = 0;
  let black_count = 0;  
  let minCount = 64;

  while (true) {
    if (xLength - 8 < xIdx) {
      xIdx = 0;
      yIdx++;
    }
    if (yLength - 8 < yIdx) {
      break;
    }
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (twodim_Arr[y + yIdx][x + xIdx] !== black_board[y][x]) {
          black_count++;
        }
        if (twodim_Arr[y + yIdx][x + xIdx] !== white_board[y][x]) {
          white_count++;
        }
      }
    }
    xIdx++;
    minCount = Math.min(white_count, black_count, minCount);

    white_count = 0;
    black_count = 0;
  }
  console.log(minCount);

  process.exit();
});
