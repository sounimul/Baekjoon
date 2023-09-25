/* 1356 유진수 */

/* input.txt
   1236
*/

/* input.txt
   1
*/

/* input.txt
   1221
*/

/* input.txt
   4729382
*/

/* input.txt
   42393338
*/

const num = require('fs').readFileSync('input.txt').toString().trim().split('');

let answer = 'NO';

for(let i=1;i<num.length;i++){
        const head = num.slice(0,i).map(Number);
        const tail = num.slice(i).map(Number);
        
        let h = 1;
        let t = 1;
        
        head.forEach(el => h*=el);
        tail.forEach(el => t*=el);
        
        if(h===t){
            answer = 'YES';
            break;
        }
}
console.log(answer);