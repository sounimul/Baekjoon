/* 15663 N과 M(9) */

/* input.txt
   3 1
   4 4 2
*/

/* input.txt
   4 2
   9 7 9 1
*/

/* input.txt
   4 4
   1 1 1 1
*/


const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

function getCase(arr, select){
    
    const result = [];
    
    if(select===1) return arr.map(el=>[el]);
    
    arr.forEach((fixed, index, origin)=>{
        const rest = [...origin.slice(0,index), ...origin.slice(index+1)];
        const c = getCase(rest, select-1);
        const attached = c.map(el=>[fixed,...el]);
        
        result.push(...attached);
    })
    
    return result;
}

console.log([...new Set(getCase(arr, m).map(arr => arr.join(' ')))].join('\n'));