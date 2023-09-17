/* 2204 도비의 난독증 테스트 */

/* input.txt
   3
   Cat
   fat
   bAt
   4
   call
   ball
   All
   Hall
   0
*/

const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

function check(arr){
    const temp = arr.map(el => el.toUpperCase()).sort()[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i].toUpperCase()===temp){
            console.log(arr[i]);
            break;
        }
    }
}

let i=0;

while(1){
    
    const N = +input[i];
    if(N===0) break;
    
    check(input.slice(i+1,i+1+N));
    i += N+1;
}