/* 5635 생일 */

/* input.txt
   5
   Mickey 1 10 1991
   Alice 30 12 1990
   Tom 15 8 1993
   Jerry 18 9 1990
   Garfield 20 9 1990
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
let students = input.slice(1, -1).map((str) => str.split(" "));

students = students.sort(
  (a, b) => +a[3] - +b[3] || +a[2] - +b[2] || +a[1] - +b[1]
);
console.log(students.at(-1)[0]);
console.log(students[0][0]);
