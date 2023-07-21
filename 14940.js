/* 14940 쉬운 최단거리 */

/* input.txt
   15 15
   2 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 0 0 0 0 1
   1 1 1 1 1 1 1 1 1 1 0 1 1 1 1
   1 1 1 1 1 1 1 1 1 1 0 1 0 0 0
   1 1 1 1 1 1 1 1 1 1 0 1 1 1 1
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((item) => item.split(" ").map(Number));
let distance = Array.from({ length: N }, () => new Array(M).fill(-1));

const da = [0, 1, 0, -1];
const db = [1, 0, -1, 0];

let x = 0;
let y = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 2) {
      distance[i][j] = 0;
      x = i;
      y = j;
    } else if (map[i][j] === 0) {
      distance[i][j] = 0;
    }
  }
}

function bfs() {
  visit = [[x, y, 0]];

  while (visit.length !== 0) {
    const [a, b, cnt] = visit.shift();
    distance[a][b] = cnt;

    for (let i = 0; i < 4; i++) {
      const na = a + da[i];
      const nb = b + db[i];

      if (
        na > -1 &&
        na < N &&
        nb > -1 &&
        nb < M &&
        distance[na][nb] === -1 &&
        map[na][nb]
      ) {
        visit.push([na, nb, cnt + 1]);
        distance[na][nb] = cnt + 1;
      }
    }
  }
}

bfs();
let answer = "";
distance.forEach((arr) => {
  answer += arr.join(" ");
  answer += "\n";
});
console.log(answer.trim());
