/* 11047 동전 0 */

/* input.txt
   10 4200
   1
   5
   10
   50
   100
   500
   1000
   5000
   10000
   50000
*/

/* input.txt
   10 4790
   1
   5
   10
   50
   100
   500
   1000
   5000
   10000
   50000
*/


const input = require('fs').readFileSync('input.txt').toString().split('\n');
[n, p] = input[0].split(' ').map(Number);
const coin = input.slice(1,-1).map(Number).sort((a,b)=>b-a);

let answer = 0;

for(let i=0;i<n;i++){
    if(coin[i]<=p){
        answer += parseInt(p/coin[i]);
        p %= coin[i];
    } 
}

console.log(answer);