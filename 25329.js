/* 25329 학생별 통화 요금 계산 */

/* input.txt
   7
   00:10 aaa
   00:30 aaa
   01:15 bbb
   01:00 ccc
   01:00 bbb
   02:10 aaa
   03:10 ccc
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const n = +input[0];
const record = input.slice(1).map((el) => el.trim());
let result = {};

for (let i = 0; i < n; i++) {
  const [t, p] = record[i].split(" ");
  const [h, m] = t.split(":").map(Number);

  const time = h * 60 + m;
  if (result[p]) result[p] += time;
  else result[p] = time;
}

let cost = [];
const index = Object.keys(result);
index.forEach((people) => {
  if (result[people] > 100) {
    cost.push([people, 10 + Math.ceil((result[people] - 100) / 50) * 3]);
  } else cost.push([people, 10]);
});

cost
  .sort()
  .sort((a, b) => b[1] - a[1])
  .forEach((el) => console.log(...el));
