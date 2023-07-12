/* 10773 제로 */

/* input.txt
   4
   3
   0
   4
   0
*/

/* input.txt
   10
   1
   3
   5
   4
   0
   0
   7
   0
   0
   6
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const n = +input[0];
const info = input.slice(1).map(Number);
let save = [];

for (let i = 0; i < n; i++) {
  if (info[i] !== 0) save.push(info[i]);
  else save.pop();
}

if (save.length === 0) console.log(0);
else console.log(save.reduce((sum, n) => sum + n));
