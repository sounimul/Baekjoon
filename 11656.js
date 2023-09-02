/* 11656 접미사 배열 */

/* input.txt
   baekjoon
*/

const input = require("fs").readFileSync("input.txt").toString().trim();
let answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(input.slice(i));
}

console.log(answer.sort().join("\n"));
