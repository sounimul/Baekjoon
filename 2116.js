/* 2116 주사위 쌓기 */

/* input.txt
   5
   2 3 1 6 5 4
   3 1 2 4 6 5
   5 6 4 1 3 2
   1 3 6 2 4 5
   4 1 6 5 2 3
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
let dice = input.slice(1).map((item) => item.split(" ").map(Number));
dice = dice.map((arr) => [
  [arr[0], arr[5]],
  [arr[1], arr[3]],
  [arr[2], arr[4]],
]);

/* 2.계산 */
let s = 0;
let max = 0;

function getSum(start, sum) {
  let top = start;
  let bottom = 0;

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 3; j++) {
      if (dice[i][j][0] === top) {
        top = dice[i][j][1];
        bottom = dice[i][j][0];
      } else if (dice[i][j][1] === top) {
        top = dice[i][j][0];
        bottom = dice[i][j][1];
      }
    }

    for (let i = 6; i >= 1; i--) {
      if (i !== top && i !== bottom) {
        sum += i;
        break;
      }
    }
  }

  if (max < sum) max = sum;
}

dice[0].forEach((arr) => {
  s = 0;

  for (let i = 6; i >= 1; i--) {
    if (i !== arr[1] && i !== arr[0]) {
      s += i;
      break;
    }
  }

  getSum(arr[1], s);
  getSum(arr[0], s);
});

/* 3.출력 */
console.log(max);
