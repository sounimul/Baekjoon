/* 2606 바이러스 */

/* input.txt
   7
   6
   1 2
   2 3
   1 5
   5 2
   5 6
   4 7
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
if (+input[0] === 1) console.log("0");
else {
  const link = input.slice(2, -1).map((str) => str.split(" ").map(Number));
  let computer = {};

  link.forEach((arr) => {
    if (computer[arr[0]]) computer[arr[0]].push(arr[1]);
    else computer[arr[0]] = [arr[1]];

    if (computer[arr[1]]) computer[arr[1]].push(arr[0]);
    else computer[arr[1]] = [arr[0]];
  });

  function check(n) {
    let visited = [];

    let stack = [n];

    while (stack.length !== 0) {
      let node = stack.shift();

      if (!visited.includes(node)) {
        visited.push(node);
        let need = computer[node];
        stack = [...need, ...stack];
      }
    }
    return visited;
  }

  console.log(check(1).length - 1);
}
