/* 1032 명령 프롬프트 */

/* input.txt
   3
   config.sys
   config.inf
   configures
*/

/* input.txt
   2
   contest.txt
   context.txt
*/

/* input.txt
   3
   c.user.mike.programs
   c.user.nike.programs
   c.user.rice.programs
*/

/* input.txt
   4
   a
   a
   b
   b
*/

/* input.txt
   1
   onlyonefile
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = +input[0];
const len = input[1].trim().length;

let pattern = '';

for(let i=0;i<len;i++){
    let temp = input[1][i];
    let c = 0;
    for(let j=1;j<=N;j++){
        if(temp!==input[j][i]) {
            pattern += '?'
            c=1;
            break;
        }
    }
    if(!c) pattern += temp;
}
console.log(pattern);