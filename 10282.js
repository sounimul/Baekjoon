/* 10282 해킹 */

/* input.txt
   2
   3 2 2
   2 1 5
   3 2 5
   3 3 1
   2 1 2
   3 1 8
   3 2 4
*/

/* 1.입력 */
const input = require("fs").readFileSync("input.txt").toString().split("\n");

/* 2.계산 */
const len = input.length;
let dis = [];
let visited = [];
let graph = {};
let i = 1;

const dijkstra = (start) => {
  const queue = [];
  queue.push([0, start]);
  dis[start] = 0;

  while (queue.length > 0) {
    const [distance, current] = queue.shift();

    if (distance > dis[current]) continue;

    if (graph[current]) {
      for (const next of graph[current]) {
        const cost = distance + next[1];
        if (cost < dis[next[0]]) {
          dis[next[0]] = cost;
          queue.push([cost, next[0]]);
        }
      }
    }
  }

  return;
};

while (i < len) {
  const [n, d, c] = input[i].split(" ").map(Number);
  const link = input
    .slice(i + 1, i + 1 + d)
    .map((str) => str.split(" ").map(Number));

  link.forEach((arr) => {
    if (graph[arr[1]]) graph[arr[1]].push([arr[0], arr[2]]);
    else graph[arr[1]] = [[arr[0], arr[2]]];
  });

  dis = new Array(n + 1).fill(Infinity);

  dijkstra(c);

  let cnt = 0;
  let max = 0;
  dis.forEach((v) => {
    if (v !== Infinity) {
      cnt++;
      if (max < v) max = v;
    }
  });

  /* 3.출력 */
  console.log(cnt, max);

  graph = {};
  i += d + 1;
}
