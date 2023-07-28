/* 16236 아기 상어 */

/* input.txt
   3
   0 0 0
   0 0 0
   0 9 0
*/

/* input.txt
   3
   0 0 1
   0 0 0
   0 9 0
*/

/* input.txt
   4
   4 3 2 1
   0 0 0 0
   0 0 9 0
   1 2 3 4
*/

/* input.txt
   6
   5 4 3 2 3 4
   4 3 2 3 4 5
   3 2 9 5 6 6
   2 1 2 3 4 5
   3 2 1 6 5 4
   6 6 6 6 6 6
*/

/* input.txt
   6
   6 0 6 0 6 1
   0 0 0 0 0 2
   2 3 4 5 6 6
   0 0 0 0 0 2
   0 2 0 0 0 0
   3 9 3 0 0 1
*/

/* input.txt
   6
   1 1 1 1 1 1
   2 2 6 2 2 3
   2 2 5 2 2 3
   2 2 2 4 6 3
   0 0 0 0 0 6
   0 0 0 0 0 9
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
let map = input.slice(1).map((str) => str.split(" ").map(Number));

/* 2.계산 */
let menu = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
let fish_spot = [0, 0];
let fish_size = 2;
let eat = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 9) {
      map[i][j] = 0;
      fish_spot = [i, j];
    } else if (map[i][j] !== 0) {
      menu[map[i][j]]++;
    }
  }
}
let target = 0;
let time = 0;
let can = 0;

//위 왼쪽 오른쪽 아래
const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

function bfs(i, j) {
  let need = [[i, j, 0]];
  let temp = [];
  let visited = Array.from({ length: N }, () => new Array(N).fill(1));

  while (need.length > 0) {
    const [x, y, d] = need.shift();
    visited[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx > -1 &&
        nx < N &&
        ny > -1 &&
        ny < N &&
        visited[nx][ny] &&
        map[nx][ny] <= fish_size
      ) {
        need.push([nx, ny, d + 1]);
        visited[nx][ny] = 0;
        if (map[nx][ny] < fish_size && map[nx][ny] > 0) {
          temp.push([d + 1, nx, ny]);
          break;
        }
      }
    }
  }

  if (temp.length === 0) {
    return -1;
  } else {
    const [dis, k, t] = temp.sort(
      (a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
    )[0];
    fish_spot = [k, t];
    menu[map[k][t]]--;
    map[k][t] = 0;
    time += dis;
    eat++;
    return 1;
  }
}

while (1) {
  target = 0;

  for (let i = 1; i < fish_size; i++) {
    if (menu[i] > 0) {
      target = i;
      can = menu[i];
      break;
    }
  }

  if (target === 0) break;
  else {
    if (bfs(fish_spot[0], fish_spot[1]) === -1) break;
  }

  if (eat === fish_size) {
    fish_size++;
    eat = 0;
  }
}

/* 3.출력 */
console.log(time);
