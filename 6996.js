/* 6996 애너그램 */

/* input.txt
   3
   blather reblath
   maryland landam
   bizarre brazier
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = +input[0];

for(let i=1;i<=N;i++){
    const [A,B] = input[i].trim().split(' ');
    const a = A.split('').sort().join('');
    const b = B.split('').sort().join('');
    
    if(a===b) console.log(`${A} & ${B} are anagrams.`);
    else console.log(`${A} & ${B} are NOT anagrams.`);
}