/* 12605 단어순서 뒤집기 */

/* input.txt
   3
   this is a test
   foobar
   all your base
*/

const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = +input[0];
for(let i=1;i<=N;i++){
    console.log(`Case #${i}: ${input[i].trim().split(' ').reverse().join(' ')}`);
}