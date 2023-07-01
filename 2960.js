/* 2960 에라토스테네스의 체 */

/* input.txt
   7 3
*/

/* input.txt
   15 12
*/

/* input.txt
   10 7
*/


const [n,k] = require('fs').readFileSync('input.txt').toString().split(' ').map(Number);

let arr = new Array(n-1).fill(1);
arr = arr.map((item, index)=> index+2);
let cnt = 0;

while(arr.length>0){
    
    let n = arr[0];
    let temp = [];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%n===0){
            cnt++;
            if(cnt===k) {
                console.log(arr[i]);
                return;
            }
        } else temp.push(arr[i]);
    }
    
    arr = [...temp];
}