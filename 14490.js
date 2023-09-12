/* 14490 백대열 */

/* input.txt
   100:10
*/

/* input.txt
   18:24
*/

const [A, B] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(":")
  .map(Number);
let gcd = 0;

for (let i = 2; i <= Math.min(A, B); i++) {
  if (A % i === 0 && B % i === 0) gcd = i;
}

if (gcd === 0) console.log(`${A}:${B}`);
else console.log(`${A / gcd}:${B / gcd}`);
