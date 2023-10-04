/* 9093 단어 뒤집기 */

/* input.txt
   2
   I am happy today
   We want to win the first prize
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const n = +input[0];

for(let i=1;i<=n;i++){
    let arr = input[i].split(' ');
    for(let j=0;j<arr.length;j++){
        arr[j] = arr[j].trim().split('').reverse().join('');
    }
    console.log(arr.join(' '));
}