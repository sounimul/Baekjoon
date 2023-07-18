/* 10430 나머지 */

/* input.txt
   5 8 4
*/

const [A, B, C] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
