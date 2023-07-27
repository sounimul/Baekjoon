/* 3190 뱀 */

/* input.txt
   6
   3
   3 4
   2 5
   5 3
   3
   3 D
   15 L
   17 D  
*/

/* input.txt
   10
   4
   1 2
   1 3
   1 4
   1 5
   4
   8 D
   10 D
   11 D
   13 L
*/

/* input.txt
   10
   5
   1 5
   1 3
   1 2
   1 6
   1 7
   4
   8 D
   10 D
   11 D
   13 L  
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
const apple = +input[1];

/* 2.계산 */
let map = Array.from({ length: N }, () => new Array(N).fill(0));
map[0][0] = 8;

input.slice(2, 2 + apple).forEach((ind) => {
  const [x, y] = ind.split(" ").map(Number);
  map[x - 1][y - 1] = 1;
});

let sec = [];
let dir = [];
input.slice(3 + apple).forEach((str) => {
  const [s, d] = str.split(" ");
  sec.push(Number(s));
  dir.push(d.trim());
});

let current_dir = "R";
let current_ind = [0, 0];
let time = 1;
let track = [];

while (1) {
  track.push(current_ind);

  switch (current_dir) {
    case "R":
      current_ind = [current_ind[0], current_ind[1] + 1];
      break;
    case "L":
      current_ind = [current_ind[0], current_ind[1] - 1];
      break;
    case "U":
      current_ind = [current_ind[0] - 1, current_ind[1]];
      break;
    case "D":
      current_ind = [current_ind[0] + 1, current_ind[1]];
      break;
  }

  if (
    current_ind[0] > -1 &&
    current_ind[0] < N &&
    current_ind[1] > -1 &&
    current_ind[1] < N &&
    map[current_ind[0]][current_ind[1]] !== 8
  ) {
    if (map[current_ind[0]][current_ind[1]] === 0) {
      const [tail_x, tail_y] = track.shift();
      map[tail_x][tail_y] = 0;
    }
    map[current_ind[0]][current_ind[1]] = 8;
  } else break;

  if (sec.includes(time)) {
    let ind = sec.indexOf(time);
    let turn = dir[ind];

    if (current_dir === "R") {
      if (turn === "D") {
        current_dir = "D";
      } else if (turn === "L") {
        current_dir = "U";
      }
    } else if (current_dir === "L") {
      if (turn === "D") {
        current_dir = "U";
      } else if (turn === "L") {
        current_dir = "D";
      }
    } else if (current_dir === "U") {
      if (turn === "D") {
        current_dir = "R";
      } else if (turn === "L") {
        current_dir = "L";
      }
    } else if (current_dir === "D") {
      if (turn === "D") {
        current_dir = "L";
      } else if (turn === "L") {
        current_dir = "R";
      }
    }
  }

  time++;
}

/* 3.출력 */
console.log(time);
