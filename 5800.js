/* 5800 성적 통계 */

/* input.txt
   2
   5 30 25 76 23 78
   6 25 50 70 99 70 90
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];

for (let i = 1; i <= N; i++) {
  console.log(`Class ${i}`);
  let temp = input[i]
    .split(" ")
    .map(Number)
    .slice(1)
    .sort((a, b) => a - b);
  let max = temp.at(-1);
  let min = temp[0];
  let gap = 0;
  for (let j = 0; j < temp.length - 1; j++) {
    if (temp[j + 1] - temp[j] > gap) gap = temp[j + 1] - temp[j];
  }
  console.log(`Max ${max}, Min ${min}, Largest gap ${gap}`);
}
