/* 17202 핸드폰 번호 궁합 */

/* input.txt
   74759336
   36195974
*/

/* input.txt
   01234567
   12345678
*/

const [A,B] = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(el => el.split('').map(Number));
let num = [];

for(let i=0;i<8;i++){
    num.push(A[i],B[i]);
}

while(num.length>2){
    let temp = [];
    for(let i=0;i<num.length;i++){
        if(i+1>num.length-1) break;
        temp.push((num[i]+num[i+1])%10);
    }
    num = [...temp];
}

console.log(num.join(''));