/* 20300 서강근육맨 */

/* input.txt
   5
   1 2 3 4 5
*/


/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n'); 
let num = input[0];
let loss = input[1].split(' ').map(BigInt).sort((a,b)=>a<b?-1:1); //오름차순 정렬

/* 2.계산 */
let m = 0;

if(num%2!==0){
  m = loss.pop(); //홀수인 경우 최댓값을 먼저 m에 넣어준다.
}

while(loss.length>0){ //짝수와 홀수 모두 최솟값과 최댓값을 더하는 연산을 한다.
    let n = loss.shift()+loss.pop();
    if(m<n) m = n; //현재의 m값 보다 그 값이 클 경우 m에 그 값을 넣어준다.
}

/* 3.출력 */
console.log(String(m)); //BigInt 값이므로 String으로 변환하여 출력한다.