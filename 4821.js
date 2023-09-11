/* 4821 페이지 세기 */

/* input.txt
   30
   10-15,25-28,8-4,13-20,9,8-8
   19
   10-15,25-28,8-4,13-20,9,8-8
   0
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i += 2) {
  if (input[i] === 0) break;

  const pages = +input[i];
  const range = input[i + 1].split(",").map((r) => r.split("-").map(Number));

  let print = new Array(pages).fill(0);

  range.forEach((arr) => {
    if (arr.length === 1 && arr <= pages) print[arr[0] - 1] = 1;
    else {
      if (arr[1] - arr[0] >= 0) {
        for (let i = arr[0]; i <= arr[1]; i++) {
          if (i <= pages) print[i - 1] = 1;
        }
      }
    }
  });

  console.log(print.filter((el) => el === 1).length);
}
