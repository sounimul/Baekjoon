/* 2294 동전 2 */

/* input.txt
   3 15
   1
   5
   12
*/


/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

/* 2.계산 */
[n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1,).map(Number);
let sum = [-1];

for(let i=1;i<=k;i++){
    let temp = [];

    if(coins.includes(i)) sum[i] = 1;
    else {
        for(let j=0;j<n;j++){
            if(sum[i-coins[j]]) temp.push(sum[i-coins[j]]);
        }
        temp = temp.filter(n=>n!==-1);
        
        if(temp.length===0) sum.push(-1);
        else sum.push(Math.min(...temp)+1);
    }
}

/* 3.출력 */
console.log(sum[k]);