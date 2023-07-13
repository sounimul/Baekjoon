/* 2108 통계학 */

/* input.txt
   5
   1
   3
   8
  -2
   2
*/

/* input.txt
   1
   4000
*/

/* input.txt
   5
  -1
  -2
  -3
  -1
  -2
*/

/* input.txt
   3
   0
   0
  -1
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const c = +input[0];
const num = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

/* 산술평균 */
console.log(parseInt(Math.round(num.reduce((sum, n) => sum + n) / c)));

/* 중앙값 */
console.log(num[parseInt(c / 2)]);

/* 최빈값 */
let count = {};

num.forEach((item) => {
  if (count[item]) count[item]++;
  else count[item] = 1;
});

let max = Math.max(...Object.values(count));
let answer = [];
num.forEach((item) => {
  if (count[item] === max) answer.push(item);
});

answer = [...new Set(answer)];
if (answer.length > 1) console.log(answer[1]);
else console.log(answer[0]);

/* 범위 */
console.log(num.at(-1) - num[0]);
