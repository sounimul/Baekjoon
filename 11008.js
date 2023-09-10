/* 11008 복붙의 달인 */

/* input.txt
   2
   banana bana
   asakusa sa
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];

for (let i = 1; i <= n; i++) {
  let sum = 0;

  const [s, p] = input[i].trim().split(" ");
  const key = s.split(p).filter((el) => el !== "");
  key.forEach((str) => (sum += str.length));

  const regex = new RegExp(`${p}`, "g");
  const copy = s.match(regex);
  sum += copy.length;

  console.log(sum);
}
