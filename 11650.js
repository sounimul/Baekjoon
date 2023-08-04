/* 11650 좌표 정렬하기 */

/* input.txt
   5
   3 4
   1 1
   1 -1
   2 2
   3 3
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];

const num = input
  .slice(1)
  .map((str) => str.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let answer = "";
num.forEach((spot) => {
  answer += `${spot[0]} ${spot[1]}\n`;
});

console.log(answer.trim());
