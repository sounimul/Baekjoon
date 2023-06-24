/* 2745 진법 변환 */

/* input.txt
   ZZZZZ 36
*/

const [n,b] = require('fs').readFileSync('input.txt').toString().split(' ');
console.log(parseInt(n,b).toString(10));