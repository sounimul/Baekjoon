/* 9733 꿀벌 */

/* input.txt
   Cc Pt Pt Re Tb Re Cm Cm Re Pt Pt Re Ea Ea Pt Pt
   Pt Re Re Cb Cb Pt Pt Cb
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.trim().split(" "));
let all = [];
input.forEach((arr) => all.push(...arr));

let work = {};
all.forEach((w) => {
  if (work[w]) work[w]++;
  else work[w] = 1;
});

const cnt = all.length;

["Re", "Pt", "Cc", "Ea", "Tb", "Cm", "Ex"].forEach((el) => {
  if (work[el]) console.log(`${el} ${work[el]} ${(work[el] / cnt).toFixed(2)}`);
  else console.log(`${el} ${0} ${(0.0).toFixed(2)}`);
});

console.log("Total", cnt, (1.0).toFixed(2));
