/* 2738 행렬 덧셈 */

/* input.txt
   3 3
   1 1 1
   2 2 2
   0 1 0
   3 3 3
   4 4 4
   5 5 100
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const a = input.slice(1,1+n).map(str=>str.split(' ').map(Number));
const b = input.slice(1+n,1+(2*n)).map(str=>str.split(' ').map(Number));

for(let i=0;i<n;i++){
    let temp = [];
    for(let j=0;j<m;j++){
        temp.push(a[i][j]+b[i][j]);
    }
    console.log(temp.join(' '));
}