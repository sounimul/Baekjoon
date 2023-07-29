/* 1182 부분수열의 합 */

/* input.txt
   5 0
  -7 -3 -2 5 8
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, S] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);
let cnt = 0;

function getSubset(arr) {
  let flag = new Array(arr.length).fill(false);

  const subSets = [];

  const subSet = function DFS(depth) {
    if (depth === arr.length) {
      const element = arr.filter((el, index) => flag[index]);
      subSets.push(element);

      return;
    }

    flag[depth] = true;
    subSet(depth + 1);

    flag[depth] = false;
    subSet(depth + 1);
  };

  subSet(0);

  return subSets;
}

getSubset(num)
  .slice(0, -1)
  .forEach((item) => {
    if (item.reduce((sum, n) => sum + n) === S) cnt++;
  });

console.log(cnt);
