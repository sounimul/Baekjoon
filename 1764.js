/* 1764 듣보잡 */

/* input.txt
   3 4
   ohhenrie
   charlie
   baesangwook
   obama
   baesangwook
   ohhenrie
   clinton
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const info = new Set(input.slice(1, 1 + N));
const info2 = new Set(input.slice(1 + N, 1 + N + M));
let names = new Set([]);

info2.forEach((name) => {
  if (info.has(name)) names.add(name);
});

let answer = [...names];
console.log(answer.length);
console.log(answer.sort().join("\n"));
