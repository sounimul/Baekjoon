/* 1292 쉽게 푸는 문제 */

/* input.txt
   3 7
*/

const [s,e] = require('fs').readFileSync('input.txt').toString().split(' ').map(Number);

let n = 1;
let cnt = 0;
let sum = 0;

for(let i=1;i<=e;i++){
   
    if(cnt===n){
        n++;
        cnt = 0;
    }
    
    if(i>=s){
        sum += n;
    }
    
    cnt++;
}

console.log(sum);