/* 1302 베스트셀러 */

/* input.txt
   5
   top
   top
   top
   top
   kimtop
*/

/* input.txt
   9
   table
   chair
   table
   table
   lamp
   door
   lamp
   table
   chair
*/

/* input.txt
   6
   a
   a
   a
   b
   b
   b
*/

/* input.txt
   8
   icecream
   peanuts
   peanuts
   chocolate
   candy
   chocolate
   icecream
   apple
*/

/* input.txt
   1
   soul
*/

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const books = input.slice(1);
let sell = {};
books.forEach((book) => {
  if (sell[book]) sell[book]++;
  else sell[book] = 1;
});

let result = Object.keys(sell)
  .sort()
  .map((el) => [el, sell[el]]);
console.log(result.sort((a, b) => b[1] - a[1])[0][0]);
