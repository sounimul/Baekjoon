/* 6603 로또 */

/* input.txt
   7 1 2 3 4 5 6 7
   8 1 2 3 5 8 13 21 34
   0
*/


/* 1.입력 */
const input = require('fs').readFileSync('input.txt').toString().split('\n');

/* 2.계산 */
function getCase(arr, select){
    
    const result = [];
    
    if(select===1) return arr.map(el=>[el]);
    
    arr.forEach((fixed, index, origin)=>{
        const rest = [...origin.slice(index+1)];
        const c = getCase(rest, select-1);
        const attached = c.map(el=>[fixed,...el]);
        
        result.push(...attached);
    })
    
    return result;
}

for(let i=0;i<input.length;i++){
    if(input[i]==='0') break;
    else {
        const temp = input[i].split(' ');
        const arr = temp.slice(1,).map(Number);
		/* 3.출력 */
        console.log(getCase(arr, 6).map(arr => arr.join(' ')).join('\n'));
    }
    console.log();
}