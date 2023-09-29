/* 16435 스네이크버드 */

/* input.txt
   3 10
   10 11 13
*/

/* input.txt
   9 1
   9 5 8 1 3 2 7 6 4
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N, L] = input[0].split(' ').map(Number);
const fruits = input[1].split(' ').map(Number).sort((a,b)=>a-b);
let snake = L;

for(let i=0;i<fruits.length;i++){
    if(snake<fruits[i]) break;
    else snake++;
}

console.log(snake);