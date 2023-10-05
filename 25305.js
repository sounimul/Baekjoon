/* 25305 커트라인 */

/* input.txt
   5 2
   100 76 85 93 98
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,k] = input[0].split(' ').map(Number);
let scores = input[1].split(' ').map(Number).sort((a,b) => b-a).slice(0,k);
console.log(scores.at(-1));