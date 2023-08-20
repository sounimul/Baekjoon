/* 11536 줄 세우기 */

/* input.txt
   5
   JOE
   BOB
   ANDY
   AL
   ADAM
*/

/* input.txt
   11
   HOPE
   ALI
   BECKY
   JULIE
   MEGHAN
   LAUREN
   MORGAN
   CARLI
   MEGAN
   ALEX
   TOBIN
*/

/* input.txt
   4
   GEORGE
   JOHN
   PAUL
   RINGO
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
let temp = input.slice(1);

const students = [...temp];
let answer = "INCREASING";

temp.sort();
for (let i = 0; i < N; i++) {
  if (temp[i] !== students[i]) {
    answer = "DECREASING";
    break;
  }
}

if (answer === "DECREASING") {
  temp.reverse();
  for (let i = 0; i < N; i++) {
    if (temp[i] !== students[i]) {
      answer = "NEITHER";
      break;
    }
  }
}

console.log(answer);
