/* 15651 N과 M(3) */

/* input.txt
   3 1
*/

/* input.txt
   4 2
*/

/* input.txt
   3 3
*/


const [n, m] = require('fs').readFileSync('input.txt').toString().split(' ').map(Number);

let arr = [];
for(let i=1;i<=n;i++){
    arr.push(i);
}

function getCase(arr, select){
    
    const result = [];
    
    if(select===1) return arr.map(el=>[el]);
    
    arr.forEach((fixed, index, origin)=>{
        const c = getCase(origin, select-1);
        const attached = c.map(el=>[fixed,...el]);
        
        result.push(...attached);
    })
    
    return result;
}

// console.log()로 인한 시간초과
// getCase(arr, m).forEach(arr=>console.log(...arr));

console.log(getCase(arr, m).map(arr => arr.join(' ')).join('\n'));