/* 21772 가희의 고구마 먹방 */

/* input.txt
   11 11 5
   ........G..
   ......S.#S.
   ........#.S
   ...........
   ...........
   .##########
   .##########
   ...........
   ...........
   ##########.
   ...........
*/

/* input.txt
   11 11 5
   G....S.....
   ...........
   ...........
   ...........
   ...........
   ...........
   .....#.....
   ...........
   ...........
   ...........
   ...........
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [R, C, T] = input[0].split(" ").map(Number);
let map = input.slice(1).map((str) => str.split(""));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let max = 0;
let [x, y] = [0, 0];

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] === "G") {
      map[i][j] = ".";
      [x, y] = [i, j];
      break;
    }
  }
}

function eat(x, y, t, c) {
  if (t === T) {
    if (max < c) max = c;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx > -1 && nx < R && ny > -1 && ny < C && map[nx][ny] !== "#") {
      if (map[nx][ny] === "S") {
        map[nx][ny] = ".";
        eat(nx, ny, t + 1, c + 1);

        map[nx][ny] = "S";
      } else eat(nx, ny, t + 1, c);
    }
  }
}

eat(x, y, 0, 0);
console.log(max);
