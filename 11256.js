/* 11256 사탕 */

/* input.txt
   1
   20 5
   3 4
   2 5
   1 8
   3 3
   2 5
*/

/* input.txt
   2
   12 3
   2 7
   1 5
   3 2
   20 3
   2 7
   1 5
   3 2
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const testCase = +input[0];

for (let i = 1; i < input.length; i++) {
  let [candy, box] = input[i].split(" ").map(Number);
  const boxes = input
    .slice(i + 1, i + 1 + box)
    .map((str) => {
      const [a, b] = str.split(" ").map(Number);
      const size = a * b;
      return size;
    })
    .sort((a, b) => b - a);

  let min = 0;
  for (let j = 0; j < boxes.length; j++) {
    candy -= boxes[j];
    min++;
    if (candy < 1) break;
  }
  console.log(min);
  i += box;
}
