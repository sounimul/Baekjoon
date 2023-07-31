/* 1920 수 찾기 */

/* input.txt
   5
   4 1 5 2 3
   5
   1 3 7 9 5
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
const M = +input[2];

const num = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const check = input[3].split(" ").map(Number);
let answer = "";

function binarySearch(n) {
  let start = 0;
  let end = num.length - 1;
  let target = false;

  while (start <= end) {
    let mid = parseInt((end + start) / 2);
    if (n < num[mid]) end = mid - 1;
    else if (n > num[mid]) start = mid + 1;
    else {
      target = true;
      break;
    }
  }

  if (target) answer += `1\n`;
  else answer += `0\n`;

  return;
}

check.forEach((n) => {
  binarySearch(n);
});

console.log(answer.trim());
