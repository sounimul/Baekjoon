/* 14889 스타트와 링크 */

/* input.txt
   4
   0 1 2 3
   4 0 5 6
   7 1 0 2
   3 4 5 0
*/

/* input.txt
   6
   0 1 2 3 4 5
   1 0 2 3 4 5
   1 2 0 3 4 5
   1 2 3 0 4 5
   1 2 3 4 0 5
   1 2 3 4 5 0
*/

/* input.txt
   8
   0 5 4 5 4 5 4 5
   4 0 5 1 2 3 4 5
   9 8 0 1 2 3 1 2
   9 9 9 0 9 9 9 9
   1 1 1 1 0 1 1 1
   8 7 6 5 4 0 3 2
   9 1 9 1 9 1 0 9
   6 5 4 3 2 1 9 0   
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
const power = input.slice(1).map((str) => str.split(" ").map(Number));

const people = new Array(N).fill(1).map((n, index) => n + index);

function Combination(select, arr) {
  const result = [];

  if (select === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const c = Combination(select - 1, rest);
    const attached = c.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result;
}

let com = Combination(N / 2, people);
com = com.map((arr) => {
  let temp = people.filter((item) => !arr.includes(item));
  return [arr, [...temp]];
});

let gap = Infinity;

function getPowerSum(arr) {
  let sum = 0;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i === j) continue;
      sum += power[arr[i] - 1][arr[j] - 1];
    }
  }

  return sum;
}

for (let i = 0; i < com.length; i++) {
  let team1 = 0;
  let team2 = 0;

  team1 += getPowerSum(com[i][0]);
  team2 += getPowerSum(com[i][1]);

  const abs = Math.abs(team1 - team2);
  if (gap > abs) gap = abs;

  if (gap === 0) break;
}

console.log(gap);
