/* 10926 ??! */

/* input.txt
   joonas
*/

/* input.txt
   baekjoon
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

const error='??!';
console.log(input+error);