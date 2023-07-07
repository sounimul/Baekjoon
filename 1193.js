/* 1193 분수찾기 */

/* input.txt
   1
*/

/* input.txt
   2
*/

/* input.txt
   3
*/

/* input.txt
   4
*/

/* input.txt
   5
*/

/* input.txt
   6
*/

/* input.txt
   7
*/

/* input.txt
   8
*/

/* input.txt
   9
*/

/* input.txt
   14
*/


const num = +require('fs').readFileSync('input.txt').toString();

let n = 0;
let sum = 0;

while(1){
    
    n++;
    sum+=n;
    if(sum>=num) break;
}

sum = sum-n+1;
let down = 0;
let up = 0;
let d = num-sum;

if(n%2===0){
    down = n-d;
    up = 1+d;
}else {
    down = 1+d;
    up = n-d;
}

console.log(`${up}/${down}`);