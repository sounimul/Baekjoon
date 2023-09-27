/* 23278 영화 평가 */

/* input.txt
   5 0 0
   70 99 96 0 30
*/

/* input.txt
   3 1 1
   91 90 50
*/

/* input.txt
   8 2 3
   23 23 23 23 23 23 23 23
*/

/* input.txt
   10 1 4
   31 52 20 86 47 76 82 27 42 29
*/

/* input.txt
   10 2 2
   1 1 0 0 1 1 0 1 0 2
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,L,H] = input[0].split(' ').map(Number);
const scores = input[1].split(' ').map(Number).sort((a,b) => a-b).slice(L,N-H);
console.log(scores.reduce((sum,n) => sum + n)/(N-L-H));