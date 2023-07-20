/* 4963 섬의 개수 */

/* input.txt
   1 1
   0
   2 2
   0 1
   1 0
   3 2
   1 1 1
   1 1 1
   5 4
   1 0 1 0 0
   1 0 0 0 0
   1 0 1 0 1
   1 0 0 1 0
   5 4
   1 1 1 0 1
   1 0 1 0 1
   1 0 1 0 1
   1 0 1 1 1
   5 5
   1 0 1 0 1
   0 0 0 0 0
   1 0 1 0 1
   0 0 0 0 0
   1 0 1 0 1
   0 0
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .slice(0, -1);

function getIsland(n, m, a) {
  let map = a.map((arr) => arr.split(" ").map(Number));
  let island = 0;

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function dfs(x, y) {
    map[x][y] = 0;

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx > -1 && nx < m && ny > -1 && ny < n && map[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }

    return;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) {
        dfs(i, j);
        island++;
      }
    }
  }

  console.log(island);
}

for (let i = 0; i < input.length; i++) {
  const [w, h] = input[i].split(" ").map(Number);
  getIsland(w, h, input.slice(i + 1, i + 1 + h));
  i += h;
}
