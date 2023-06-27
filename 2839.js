/* 2839 설탕 배달 */

/* input.txt
   18
*/

/* input.txt
   4
*/

/* input.txt
   6
*/

/* input.txt
   9
*/

/* input.txt
   11
*/


const weight = +require('fs').readFileSync('input.txt').toString();

const three = parseInt(weight/3);
let answer = Infinity;

for(let i=three;i>=0;i--){
    
    let temp = 0;
    
    if((weight-(3*i))%5!==0) continue;
    else {
        temp = i+((weight-(3*i))/5);
        if(temp<answer) answer = temp;
    }
}

if(answer===Infinity) console.log(-1);
else console.log(answer);