/* 11559 Puyo Puyo */

/* input.txt
   ......
   ......
   ......
   ......
   ......
   ......
   ......
   ......
   .Y....
   .YG...
   RRYG..
   RRYGG.
*/

/* 1.입력 */
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let game = input.reverse().map((str) => str.split(""));

/* 2.계산 */
let answer = 0;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function puyo(row, col, s) {
  need = [];
  need.push([row, col]);

  let cnt = 0;

  while (need.length !== 0) {
    const [x, y] = need.shift();
    game[x][y] = "+";
    cnt++;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx > -1 && nx < 12 && ny > -1 && ny < 6 && game[nx][ny] === s) {
        game[nx][ny] = "+";
        need.push([nx, ny]);
      }
    }
  }

  if (cnt < 4) {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 12; j++) {
        if (game[j][i] === "+") game[j][i] = s;
      }
    }
    return 0;
  } else {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 12; j++) {
        if (game[j][i] === "+") game[j][i] = ".";
      }
    }
    return 1;
  }
}

while (1) {
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (game[i][j] !== ".") {
        sum += puyo(i, j, game[i][j]);
      }
    }
  }

  if (sum === 0) break;

  for (let i = 0; i < 6; i++) {
    let letter = [];
    for (let j = 0; j < 12; j++) {
      if (game[j][i] !== ".") {
        letter.push(game[j][i]);
        game[j][i] = ".";
      }
    }

    for (let k = 0; k < letter.length; k++) {
      game[k][i] = letter[k];
    }
  }

  answer++;
}

/* 3.출력 */
console.log(answer);
