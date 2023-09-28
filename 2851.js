/* 2851 슈퍼 마리오 */

/* input.txt
   10
   20
   30
   40
   50
   60
   70
   80
   90
   100
*/

/* input.txt
   1
   2
   3
   5
   8
   13
   21
   34
   55
   89
*/

/* input.txt
   40
   40
   40
   40
   40
   40
   40
   40
   40
   40
*/

const input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number);

let sum = 0;
let num = [];
let d = [];

for(let i=0;i<input.length;i++){
    sum += input[i];
    num.push(sum);
}

num = num.map(el => [el,Math.abs(el-100)]);
console.log(num.sort((a,b) => a[1]-b[1] || b[0]-a[0])[0][0]);