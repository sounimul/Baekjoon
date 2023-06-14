/* 2753 윤년 */

/* input.txt
   2000
*/

/* input.txt
   1999
*/

const year = +require('fs').readFileSync('input.txt').toString();

if((year%4===0 && year%100!==0) || year%400===0) console.log(1);
else console.log(0);