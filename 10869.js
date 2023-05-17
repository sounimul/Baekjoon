/* 10869 사칙연산 */

/* input.txt
   7 3
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(' ').map(Number);
const a = input[0];
const b = input[1];

let answer = `${a+b}\n${a-b}\n${a*b}\n${Math.floor(a/b)}\n${a%b}`;
console.log(answer);
