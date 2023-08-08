/* 14681 사분면 고르기 */

/* input.txt
   12
   5   
*/

/* input.txt
   9
  -13  
*/

const [x, y] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map(Number);

if (x < 0) {
  if (y < 0) console.log(3);
  else console.log(2);
} else {
  if (y < 0) console.log(4);
  else console.log(1);
}
