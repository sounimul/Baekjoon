/* 12845 모두의 마블 */

/* input.txt
   3
   40 30 30
*/


/* 1.입력 */
const input = require('fs').readFileSync('input.txt').toString().split('\n');
const n = +input[0];
let cards = input[1].split(' ').map(Number);

let gold = 0;

/* 2.계산 */
cards.sort((a,b)=>b-a);

/* 3.출력 */    
if(n===1) console.log(0);
else console.log(cards[0]*(n-1) + cards.slice(1).reduce((sum, num)=> sum + num));