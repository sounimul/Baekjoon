/* 10867 중복 빼고 정렬하기 */

/* input.txt
   10
   1 4 2 3 1 4 2 3 1 2
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
const num = [...new Set(input[1].split(" ").map(Number))].sort((a, b) => a - b);
console.log(...num);
