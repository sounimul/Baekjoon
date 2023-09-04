/* 18222 차집합 */

/* input.txt
   4 3
   2 5 11 7
   9 7 4
*/

/* input.txt
   3 5
   2 5 4
   1 2 3 4 5
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [A, B] = input[0].split(" ").map(Number);
const a_arr = new Set(input[1].split(" ").map(Number));
const b_arr = new Set(input[2].split(" ").map(Number));
let answer = new Set([]);

a_arr.forEach((n) => {
  if (!b_arr.has(n)) answer.add(n);
});

console.log(answer.size);
console.log(...[...answer].sort((a, b) => a - b));
