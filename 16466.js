/* 16466 콘서트 */

/* input.txt
   5
   4 1 2 7 8
*/

/* input.txt
   3
   7 8 9
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = +input[0];
let arr = input[1].split(' ').map(Number).sort((a,b) => a-b);

let ticket = 1;

for(let i=0;i<arr.length;i++){
    if(ticket===arr[i]) ticket++;
    else break;
}

console.log(ticket);