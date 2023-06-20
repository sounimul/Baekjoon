/* 15649 N과 M(1) */

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

function getPermutations(arr, select){
    const result = [];
    if(select===1) return arr.map(el=>[el]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0,index), ...origin.slice(index+1)]
        const permutations = getPermutations(rest, select-1);
        const attached = permutations.map(el=>[fixed, ...el]);
        result.push(...attached);
    })
    
    return result;
}

getPermutations(arr, m).forEach(arr=> console.log(arr.join(" ")));