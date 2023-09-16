/* 1357 뒤집힌 덧셈 */

/* input.txt
   123 100
*/

/* input.txt
   111 111
*/

/* input.txt
   5 5
*/

/* input.txt
   1000 1
*/

/* input.txt
   456 789
*/

const [X,Y] = require('fs').readFileSync('input.txt').toString().trim().split(' ').map(el => +el.split('').reverse().join(''));
console.log(+(X+Y).toString().split('').reverse().join(''));