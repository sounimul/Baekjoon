/* 10823 더하기 2 */

/* input.txt
   10,20,
   3
   0,50
   ,1
   00
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n').map(el=>el.trim()).join('');
console.log(input.split(',').map(Number).reduce((sum,n) => sum+n));