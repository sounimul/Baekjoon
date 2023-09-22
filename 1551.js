/* 1551 수열의 변화 */

/* input.txt
   5 1
   5,6,3,9,-1
*/

/* input.txt
   5 2
   5,6,3,9,-1
*/

/* input.txt
   5 4
   5,6,3,9,-1
*/

/* input.txt
   8 3
   4,4,4,4,4,4,4,4
*/

/* input.txt
   2 0
   -100,100
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,K] = input[0].split(' ').map(Number);
let arr = input[1].split(',').map(Number);

for(let i=0;i<K;i++){
    let temp = []; 
    for(let j=0;j<arr.length-1;j++){
        temp.push(arr[j+1]-arr[j]);
    }
    arr = [...temp];
}

console.log(arr.join(','));