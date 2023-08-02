/* 1058 친구 */

/* input.txt
   3
   NYY
   YNY
   YYN
*/

/* input.txt
   3
   NNN
   NNN
   NNN
*/

/* input.txt
   5
   NYNNN
   YNYNN
   NYNYN
   NNYNY
   NNNYN
*/

/* input.txt
   10
   NNNNYNNNNN
   NNNNYNYYNN
   NNNYYYNNNN
   NNYNNNNNNN
   YYYNNNNNNY
   NNYNNNNNYN
   NYNNNNNYNN
   NYNNNNYNNN
   NNNNNYNNNN
   NNNNYNNNNN
*/

/* input.txt
   15
   NNNNNNNNNNNNNNY
   NNNNNNNNNNNNNNN
   NNNNNNNYNNNNNNN
   NNNNNNNYNNNNNNY
   NNNNNNNNNNNNNNY
   NNNNNNNNYNNNNNN
   NNNNNNNNNNNNNNN
   NNYYNNNNNNNNNNN
   NNNNNYNNNNNYNNN
   NNNNNNNNNNNNNNY
   NNNNNNNNNNNNNNN
   NNNNNNNNYNNNNNN
   NNNNNNNNNNNNNNN
   NNNNNNNNNNNNNNN
   YNNYYNNNNYNNNNN
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
const link = input.slice(1).map((str) => str.split(""));

/* 2.계산 */
let friend = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let temp = [];

  for (let j = 0; j < N; j++) {
    if (link[i][j] === "Y") {
      friend[i]++;
      temp.push(j);
    }
  }

  for (let k = 0; k < N; k++) {
    if (k !== i && !temp.includes(k)) {
      for (let t = 0; t < N; t++) {
        if (link[k][t] === "Y" && temp.includes(t)) {
          friend[i]++;
          break;
        }
      }
    }
  }
}

/* 3.출력 */
console.log(Math.max(...friend));
