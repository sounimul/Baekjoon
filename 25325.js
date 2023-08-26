/* 25325 학생 인기도 측정 */

/* input.txt
   4
   aaa bbb ccc ddd
   bbb ddd
   aaa ddd
   aaa
   aaa bbb
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];

let like = {};
input[1]
  .trim()
  .split(" ")
  .forEach((name) => (like[name] = 0));

for (let i = 2; i <= N + 1; i++) {
  const info = input[i].trim().split(" ");
  info.forEach((name) => {
    like[name]++;
  });
}

let keys = Object.keys(like).map((el) => [el, like[el]]);
keys
  .sort((a, b) => b[1] - a[1])
  .forEach((item) => {
    console.log(item[0], item[1]);
  });
