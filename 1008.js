/* 1008 A/B */

/* input.txt
   1 3
*/

/* input.txt
   4 5
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(' ');
const a = +input[0];
const b = +input[1];

console.log(a/b);