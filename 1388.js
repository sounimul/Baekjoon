/* 1388 바닥 장식 */

/* input.txt
   4 4
   ----
   ----
   ----
   ----
*/

/* input.txt
   6 9
   -||--||--
   --||--||-
   |--||--||
   ||--||--|
   -||--||--
   --||--||-
*/

/* input.txt
   7 8
   --------
   |------|
   ||----||
   |||--|||
   ||----||
   |------|
   --------
*/

/* input.txt
   10 10
   ||-||-|||-
   ||--||||||
   -|-|||||||
   -|-||-||-|
   ||--|-||||
   ||||||-||-
   |-||||||||
   ||||||||||
   ||---|--||
   -||-||||||
*/

/* input.txt
   6 6
   -||--|
   ||||||
   |||-|-
   -||||-
   ||||-|
   ||-||-
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let room = input.slice(1).map((item) => item.split(""));
let cnt = 0;

function moveR(x, y) {
  for (let k = y; k < m; k++) {
    if (room[x][k] === "-") room[x][k] = "x";
    else break;
  }

  cnt++;
}

function moveD(x, y) {
  for (let k = x; k < n; k++) {
    if (room[k][y] === "|") room[k][y] = "x";
    else break;
  }

  cnt++;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (room[i][j] === "-") moveR(i, j);
    else if (room[i][j] === "|") moveD(i, j);
  }
}

console.log(cnt);
