/* 11004 K번째 수 */

/* input.txt
   5 2
   4 1 2 3 5
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(numbers[K - 1]);
