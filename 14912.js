/* 14912 숫자 빈도수 */

/* input.txt
   11 1
*/

/* input.txt
   100 3
*/

const [digit, d] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map(Number);
let cnt = 0;
for (let i = 1; i <= digit; i++) {
  let temp = String(i).split("").map(Number);
  temp = temp.filter((n) => n === d);
  cnt += temp.length;
}

console.log(cnt);
