/* 2890 카약 */

/* input.txt
   10 10
   S.....111F
   S....222.F
   S...333..F
   S..444...F
   S.555....F
   S666.....F
   S.777....F
   S..888...F
   S...999..F
   S........F
*/

/* input.txt
   10 15
   S..........222F
   S.....111.....F
   S...333.......F
   S...555.......F
   S.......444...F
   S.............F
   S......777....F
   S..888........F
   S........999..F
   S...666.......F   
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [R, C] = input[0].split(" ").map(Number);
let answer = new Array(9).fill(0).map((el, ind) => [ind, el]);
let r = [];

for (let i = 1; i <= R; i++) {
  const result = input[i].split("").slice(1, -1);
  let num = 0;
  let left = 0;
  for (let j = C - 3; j > 0; j--) {
    if (result[j] === ".") left++;
    else {
      num = +result[j];
      break;
    }
  }

  if (num !== 0) {
    answer[num - 1] = [num, left];
    if (!r.includes(left)) r.push(left);
  }
}

r.sort((a, b) => a - b);

answer.forEach((el) => {
  console.log(r.indexOf(el[1]) + 1);
});
