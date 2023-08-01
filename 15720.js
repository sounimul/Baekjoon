/* 15720 카우버거 */

/* input.txt
   3 3 2
   2000 3000 2500
   800 1300 1000
   500 1000
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [B, C, D] = input[0].split(" ").map(Number);
const N = Math.min(B, C, D);
const burger = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const side = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const drink = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(
  burger.reduce((sum, cost) => sum + cost) +
    side.reduce((sum, cost) => sum + cost) +
    drink.reduce((sum, cost) => sum + cost)
);

let discount =
  burger.slice(0, N).reduce((sum, cost) => sum + cost) * 0.9 +
  side.slice(0, N).reduce((sum, cost) => sum + cost) * 0.9 +
  drink.slice(0, N).reduce((sum, cost) => sum + cost) * 0.9;
if (B > N) discount += burger.slice(N).reduce((sum, cost) => sum + cost);
if (C > N) discount += side.slice(N).reduce((sum, cost) => sum + cost);
if (D > N) discount += drink.slice(N).reduce((sum, cost) => sum + cost);
console.log(discount);
