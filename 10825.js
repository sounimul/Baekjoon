/* 10825 국영수 */

/* input.txt
   12
   Junkyu 50 60 100
   Sangkeun 80 60 50
   Sunyoung 80 70 100
   Soong 50 60 90
   Haebin 50 60 100
   Kangsoo 60 80 100
   Donghyuk 80 60 100
   Sei 70 70 70
   Wonseob 70 70 90
   Sanghyun 70 70 80
   nsj 80 80 80
   Taewhan 50 60 90
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
let score = input.slice(1).map((str) => str.split(" "));
function checkASCII(a, b) {
  for (let i = 0; i < 10; i++) {
    if (a.charCodeAt(i) === b.charCodeAt(i)) continue;
    else return a.charCodeAt(i) - b.charCodeAt(i);
  }
}
score.sort(
  (a, b) => b[1] - a[1] || a[2] - b[2] || b[3] - a[3] || checkASCII(a[0], b[0])
);

let answer = "";
for (let i = 0; i < N; i++) {
  answer += `${score[i][0]}\n`;
}
console.log(answer.trim());
