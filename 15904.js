/* 15904 UCPC는 무엇의 약자일까? */

/* input.txt
   Union of Computer Programming Contest club contest
*/

/* input.txt
   University Computer Programming
*/

let string = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((s) => s.split(""));
let char = [];
string.forEach((s) => {
  s.forEach((c) => char.push(c));
});

const UCPC = ["U", "C", "P", "C"];
let check_index = 0;

for (let i = 0; i < char.length; i++) {
  if (char[i] === UCPC[check_index]) {
    check_index++;
  }
  if (check_index === 4) break;
}

if (check_index === 4) console.log("I love UCPC");
else console.log("I hate UCPC");
