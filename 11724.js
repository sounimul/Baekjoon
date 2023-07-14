/* 11724 연결 요소의 개수 */

/* input.txt
   6 5
   1 2
   2 5
   5 1
   3 4
   4 6
*/

/* input.txt
   6 8
   1 2
   2 5
   5 1
   3 4
   4 6
   5 4
   2 4
   2 3
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const link = input.slice(1).map((str) => str.split(" ").map(Number));

const edge = [];
for (let i = 1; i <= N; i++) {
  edge[i] = [];
}

link.forEach((arr) => {
  const [from, to] = arr;
  edge[from].push(to);
  edge[to].push(from);
});

let cnt = 0;
let visited = new Array(N + 1).fill(false);

function dfs(n) {
  visited[n] = true;

  for (let i = 0; i < edge[n].length; i++) {
    let next = edge[n][i];
    if (!visited[next]) dfs(next);
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

console.log(cnt);
