/* 10818 최소, 최대 */

/* input.txt
   5
   20 10 35 30 7
*/


const input = require('fs').readFileSync('input.txt').toString().split('\n');
const num = input[1].split(' ').map(Number);

console.log(`${Math.min(...num)} ${Math.max(...num)}`);