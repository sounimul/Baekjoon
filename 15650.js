/* 15650 N과 M(2) */

/* input.txt
   3 1
*/

/* input.txt
   4 2
*/

/* input.txt
   4 4
*/


const [n, m] = require('fs').readFileSync('input.txt').toString().split(' ').map(Number);

let arr = [];
for(let i=1;i<=n;i++){
    arr.push(i);
}

function getCombination(arr, select){
    
    const result = [];
    
    if(select===1) return arr.map(el => [el]);
    
    arr.forEach((fixed, index, origin)=>{
        
        const rest = origin.slice(index+1);
        const combination = getCombination(rest, select-1);
        const attached = combination.map(el=>[fixed, ...el]);
        
        result.push(...attached);
        
    });
    
    return result; 
}

getCombination(arr, m).forEach(arr=>console.log(...arr));