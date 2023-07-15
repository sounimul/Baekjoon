/* 7568 덩치 */

/* input.txt
   5
   55 185
   58 183
   88 186
   60 175
   46 155
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const n = +input[0];
let info = input.slice(1).map((item) => item.split(" ").map(Number));

let answer = "";
let cnt_arr = [];

for (let i = 0; i < n; i++) {
  let cnt = 0;
  let w = info[i][0];
  let h = info[i][1];
  for (let j = 0; j < n; j++) {
    if (w < info[j][0] && h < info[j][1]) cnt++;
  }
  cnt_arr.push([cnt + 1, info[i][2]]);
}

cnt_arr.sort((a, b) => a[1] - b[1]);
cnt_arr.forEach((item) => (answer += `${item[0]} `));

console.log(answer.trim());
