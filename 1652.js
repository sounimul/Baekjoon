/* 1652 누울 자리를 찾아라 */

/* input.txt
   5
   ....X
   ..XX.
   .....
   .XX..
   X....
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
const map = input.slice(1).map((str) => str.split(""));
let row = 0;
let col = 0;

for (let i = 0; i < N; i++) {
  let spot = 0;
  let front = 0;
  let check = 0;
  for (let j = 0; j < N; j++) {
    if (map[i][j] === ".") {
      if (front >= 1 && spot >= 1 && check === 0) {
        row++;
        check = 1;
      }
      front++;
      spot++;
    } else {
      front = 0;
      spot = 0;
      check = 0;
    }
  }
}

for (let i = 0; i < N; i++) {
  let spot = 0;
  let front = 0;
  let check = 0;
  for (let j = 0; j < N; j++) {
    if (map[j][i] === ".") {
      if (front >= 1 && spot >= 1 && check === 0) {
        col++;
        check = 1;
      }
      front++;
      spot++;
    } else {
      front = 0;
      spot = 0;
      check = 0;
    }
  }
}

console.log(row, col);
