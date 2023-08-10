/* 1427 소트인사이드 */

/* input.txt
   2143
*/

/* input.txt
   999998999
*/

/* input.txt
   61423
*/

/* input.txt
   500613009
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);
console.log(input.sort((a, b) => b - a).join(""));
