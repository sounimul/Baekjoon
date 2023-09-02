/* 1755 숫자놀이 */

/* input.txt
   8 28
*/

let string = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const [start, end] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let result = [];

for (let i = start; i <= end; i++) {
  let change = String(i)
    .split("")
    .map((el) => string[el])
    .join("");
  result.push([change, i]);
}

result.sort();

let answer = "";
let cnt = 0;

for (let j = 0; j < result.length; j++) {
  cnt++;
  answer += `${result[j][1]} `;
  if (cnt === 10) {
    answer += "\n";
    cnt = 0;
  }
}

console.log(answer);
