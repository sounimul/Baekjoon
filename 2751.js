/* 2751 수 정렬하기 2 */

/* input.txt
   5
   5
   4
   3
   2
   1
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n').map(Number);

const n = input[0];
let arr = input.slice(1,n+1);
let answer = '';

arr = arr.sort((a,b)=>a-b);
for(let i=0;i<n;i++){
    answer += `${arr[i]}\n`; //console.log를 반복하면 시간 초과가 발생하므로 출력 형태를 만들어 한 번에 출력한다.
}
console.log(answer);
