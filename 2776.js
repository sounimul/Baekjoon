/* 2776 암기왕 */

/* input.txt
   1
   5
   4 1 5 2 3
   5
   1 3 7 9 5
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const cnt = +input[0];
let answer = "";

for (let i = 1; i < input.length; i++) {
  let note1 = new Set();

  input[i + 1]
    .split(" ")
    .map(Number)
    .forEach((el) => note1.add(el));
  input[i + 3]
    .split(" ")
    .map(Number)
    .forEach((el) => {
      if (note1.has(el)) answer += `1\n`;
      else answer += `0\n`;
    });

  i += 3;
}

console.log(answer.trim());
