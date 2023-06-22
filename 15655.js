/* 15655 N과 M(6) */

/* input.txt
   3 1
   4 5 2
*/

/* input.txt
   4 2
   9 8 7 1
*/

/* input.txt
   4 4
   1231 1232 1233 1234
*/


const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

function getCase(arr, select){
    
    const result = [];
    
    if(select===1) return arr.map(el=>[el]);
    
    arr.forEach((fixed, index, origin)=>{
        const rest= [...origin.slice(index+1)];
        const c = getCase(rest, select-1);
        const attached = c.map(el=>[fixed,...el]);
        
        result.push(...attached);
    })
    
    return result;
}

console.log(getCase(arr, m).map(arr => arr.join(' ')).join('\n'));