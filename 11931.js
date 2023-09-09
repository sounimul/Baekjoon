/* 11931 수 정렬하기 4 */

/* input.txt
   5
   1
   2
   3
   4
   5
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const num = input.slice(1).sort((a, b) => b - a);
console.log(num.join("\n"));
