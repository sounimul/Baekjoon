/* 1026 보물 */

/* input.txt
   5
   1 1 1 6 0
   2 7 8 3 1
*/

/* input.txt
   3
   1 1 3
   10 30 20
*/

/* input.txt
   9
   5 15 100 31 39 0 0 3 26
   11 12 13 2 3 4 5 9 1
*/


const input = require('fs').readFileSync('input.txt').toString().split('\n');
const n = +input[0];
let a = input[1].split(' ').map(Number).sort((a,b)=>a-b);
let b = input[2].split(' ').map(Number).sort((a,b)=>b-a);

let sum = 0;

for(let i=0;i<n;i++){
    sum += a[i]*b[i];
}

console.log(sum);