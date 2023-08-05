/* 10816 숫자 카드 2 */

/* input.txt
   10
   6 3 2 10 10 10 -10 -10 7 3
   8
   10 9 -5 2 3 4 5 -10
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
const info = input[1].split(" ").map(Number);
const M = +input[2];
const check = input[3].split(" ").map(Number);

let have = {};
info.forEach((item) => {
  if (have[item]) have[item]++;
  else have[item] = 1;
});

let answer = "";
check.forEach((num) => {
  if (have[num]) answer += `${have[num]} `;
  else answer += "0 ";
});

console.log(answer.trim());
