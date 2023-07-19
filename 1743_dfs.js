/* 1743 음식물 피하기 */

/* input.txt
   3 4 5
   3 2
   2 2
   3 1
   2 3
   1 1
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, M, K] = input[0].split(" ").map(Number);

/* 2.계산 */
const info = input.slice(1).map((arr) => arr.split(" ").map(Number));

let map = Array.from({ length: N }, () => new Array(M).fill(0));

for (let i = 0; i < K; i++) {
  map[info[i][0] - 1][info[i][1] - 1] = 1;
}

let max = [];
let cnt = 1;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function dfs(x, y) {
  map[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx > -1 && nx < N && ny > -1 && ny < M && map[nx][ny] === 1) {
      cnt++;
      dfs(nx, ny);
    }
  }

  return;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) {
      cnt = 1;
      dfs(i, j);
      max.push(cnt);
    }
  }
}

/* 3.출력 */
console.log(Math.max(...max));
