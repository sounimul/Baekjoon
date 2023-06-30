/* 1339 단어 수학 */

/* input.txt
   2
   AAA
   AAA
*/

/* input.txt
   2
   GCF
   ACDEB
*/

/* input.txt
   10
   A
   B
   C
   D
   E
   F
   G
   H
   I
   J
*/

/* input.txt
   2
   AB
   BA
*/


/* 1.입력 */
const input = require('fs').readFileSync('input.txt').toString().split('\n');
const n = +input[0];
let num = input.slice(1).map(str=>str.trim().split(''));

let letter = {};
let num_dic = {};
let k = 9;
let sum = 0;

/* 2.계산 */
num.forEach(arr => {
    
    const len = arr.length-1;
    
    for(let i=0;i<=len;i++){
        let hex = Math.pow(10, len-i);
        
        if(!letter[arr[i]]) letter[arr[i]] = hex;
        else letter[arr[i]] += hex;
    }
})

const keys = Object.keys(letter).map(key => [letter[key],key])
keys.sort((a,b)=>b[0]-a[0]);
keys.forEach(arr=>{
    let str = arr[1];
    
    num_dic[str] = k;
    k--;
})

num.forEach((arr,index)=>{
    let temp = [];
    
    arr.forEach(key=>{
        temp.push(num_dic[key]);
    })
    
    sum += +temp.join('');
})

/* 3.출력 */
console.log(sum);