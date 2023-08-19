/* 9237 이장님 초대 */

/* input.txt
   4
   2 3 4 3
*/

/* input.txt
   6
   39 38 9 35 39 20
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
let days = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
days = days.map((day, index) => day - (N - index));

console.log(Math.max(...days) + N + 2);
