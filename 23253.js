/* 23253 자료구조는 정말 최고야 */

/* input.txt
   14 2
   2
   3 1
   2
   4 2
*/

/* input.txt
   5 2
   3
   3 5 1
   2
   4 2
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let book = [];

for (let i = 1; i <= M * 2; i += 2) {
  book.push(input[i + 1].split(" ").map(Number).reverse());
}

let num = 1;
let answer = "Yes";

for (let i = 0; i < M; i++) {
  for (let j = 0; j < book[i].length - 1; j++) {
    if (book[i][j] > book[i][j + 1]) {
      answer = "No";
      break;
    }
  }
}

console.log(answer);
