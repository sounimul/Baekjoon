/* 1475 방 번호 */

/* input.txt
   9999
*/

/* input.txt
   122
*/

/* input.txt
   12635
*/

/* input.txt
   888888
*/

let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);

let number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
input.forEach((num) => {
  number[num]++;
});

let temp = Math.ceil((number[6] + number[9]) / 2);
number[6] = temp;
number[9] = temp;

console.log(Math.max(...number));
