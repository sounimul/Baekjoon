/* 13023 ABCDE */

/* input.txt
   5 4
   0 1
   1 2
   2 3
   3 4
*/

/* input.txt
   5 5
   0 1
   1 2
   2 3
   3 0
   1 4
*/

/* input.txt
   6 5
   0 1
   0 2
   0 3
   0 4
   0 5
*/

/* input.txt
   8 8
   1 7
   3 7
   4 7
   3 4
   4 6
   3 5
   0 4
   2 7
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const c = +input[0].split(" ")[0];
const link = input.slice(1).map((str) => str.split(" ").map(Number));

/* 2.계산 */
let friend = new Array(c).fill().map(() => []);

link.forEach((arr) => {
  const [a, b] = arr;
  friend[a].push(b);
  friend[b].push(a);
});

let visited = new Array(c).fill(false);
let answer = 0;

function dfs(n, cnt, v) {
  v[n] = true;

  if (cnt === 4) {
    answer = 1;
    return;
  }

  if (friend[n].length === 0) return;

  for (let i = 0; i < friend[n].length; i++) {
    if (!v[friend[n][i]]) {
      v[friend[n][i]] = true;
      dfs(friend[n][i], cnt + 1, v);
      v[friend[n][i]] = false;
    }
  }
}

for (let i = 0; i < c; i++) {
  v = [...visited];
  dfs(i, 0, v);
  if (answer === 1) break;
}

/* 3.출력 */
console.log(answer);
