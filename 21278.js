/* 21278 호석이 두 마리 치킨 */

/* input.txt
   5 4
   1 3
   4 2
   2 5
   3 2
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const link = input.slice(1).map((str) => str.split(" ").map(Number));

/* 2.계산 */
let info = {};

for (let i = 1; i <= N; i++) {
  info[i] = [];
}

link.forEach((item) => {
  info[item[0]].push(item[1]);
  info[item[1]].push(item[0]);
});

let graph = Array.from({ length: N + 1 }, () =>
  new Array(N + 1).fill(Infinity)
);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i === j) graph[i][j] = 0; //자기자신은 이동 거리 없으므로 0 초기화
  }
}

link.forEach((item) => {
  graph[item[0]][item[1]] = 1;
  graph[item[1]][item[0]] = 1;
});

for (let k = 1; k <= N; k++) {
  for (let a = 1; a <= N; a++) {
    for (let b = 1; b <= N; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

function combination(arr, select) {
  const result = [];

  if (select === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(index + 1)];
    const n = combination(rest, select - 1);
    const attached = n.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result;
}

const com = combination(
  new Array(N).fill(1).map((n, index) => n + index),
  2
);

let min_len = Infinity;
let spot = [0, 0];

for (let i = 0; i < com.length; i++) {
  let sum = 0;

  let one = com[i][0];
  let two = com[i][1];

  for (let i = 1; i <= N; i++) {
    if (i === one || i === two) continue;
    else {
      sum +=
        graph[two][i] > graph[one][i] ? graph[one][i] * 2 : graph[two][i] * 2;
    }
  }

  if (min_len > sum) {
    min_len = sum;
    spot = [one, two];
  }
}

/* 3.출력 */
console.log(...spot, min_len);
