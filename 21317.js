/* 21317 징검다리 건너기 */

/* input.txt
   5
   1 2
   2 3
   4 5
   6 7
   4
*/


/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const n = +input[0];
const e_arr = input.slice(1,n).map(arr => arr.split(' ').map(Number)); //Energy Array
const k = +input[n];

/* 2.계산 */
let dp = [0, 0, e_arr[0][0]];
for(let i = 3; i<=n; i++){
    dp.push(Math.min(dp[i-1] + e_arr[i-2][0], dp[i-2] + e_arr[i-3][1]));
}
    
let min = [dp[n]];
for(let j=1;j<=n-3;j++){
    let temp = [...dp];

    if(temp[j+3] <= temp[j] + k) {
        continue;
    }
    else{  
        temp[j+3] = temp[j] + k;
        for(let k=j+4;k<=n;k++){
                temp[k] = Math.min(temp[k-1] +e_arr[k-2][0],temp[k-2] + e_arr[k-3][1]);
        }
        min.push(temp[n]);
    }
}

/* 3.출력 */    
console.log(Math.min(...min));
