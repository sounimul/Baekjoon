/* 9205 맥주 마시면서 걸어가기 */

/* input.txt
   2
   2
   0 0
   1000 0
   1000 1000
   2000 1000
   2
   0 0
   1000 0
   2000 1000
   2000 2000
*/

/* 1.입력 */
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const c = +input[0];

/* 2.계산 */
function solution(start, charge, end) {
  let visited = new Array(charge.length).fill(1);
  let need = [];
  need.push(start);

  while (need.length !== 0) {
    const spot = need.shift();
    if (Math.abs(spot[0] - end[0]) + Math.abs(spot[1] - end[1]) <= 1000) {
      /* 3.출력 */
      console.log("happy");
      return;
    }

    charge.forEach((arr, ind) => {
      if (
        visited[ind] === 1 &&
        Math.abs(arr[0] - spot[0]) + Math.abs(arr[1] - spot[1]) <= 1000
      ) {
        visited[ind] = 0;
        need.push(arr);
      }
    });
  }

  /* 3.출력 */
  console.log("sad");
  return;
}

for (let i = 1; i < input.length; i++) {
  const cnt = +input[i];
  const home = input[i + 1].split(" ").map(Number);
  let info = input
    .slice(i + 2, i + 2 + cnt)
    .map((str) => str.split(" ").map(Number));
  const festival = input[i + 2 + cnt].split(" ").map(Number);

  i += cnt + 2;
  solution(home, info, festival);
}
