/* 14582 오늘도 졌다 */

/* input.txt
   1 0 0 0 0 0 2 2 1
   0 0 3 0 0 0 0 1 4
*/

/* input.txt
   0 0 0 0 0 0 0 1 0
   1 0 0 0 0 0 0 4 0
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const myInfo = input[0].split(" ").map(Number);
const otherInfo = input[1].split(" ").map(Number);

/* 2.계산 */
let myScore = 0;
let otherScore = 0;

let answer = 0;

for (let i = 0; i < 9; i++) {
  myScore += myInfo[i];
  if (myScore > otherScore) {
    answer = 1;
    break;
  }

  otherScore += otherInfo[i];
  if (myScore > otherScore) {
    answer = 1;
    break;
  }
}

/* 3.출력 */
if (answer === 1) console.log("Yes");
else console.log("No");
