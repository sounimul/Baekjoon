/* 9251 LCS */

/* input.txt
   ACAYKP
   CAPCAK
*/


/* 1.입력 */
const [str1, str2] = require('fs').readFileSync('input.txt').toString().split('\n');
let match = Array.from(Array(str1.length+1), ()=> new Array(str2.length+1).fill(0));

/* 2.계산 */
for(let i=1;i<=str1.length;i++){
    for(let j=1;j<=str2.length;j++){
        if(str1[i-1]===str2[j-1]){
            match[i][j] = match[i-1][j-1]+1;
        }else {
            match[i][j] = Math.max(match[i-1][j], match[i][j-1]);
        }
    }
}

let max = 0;
match.forEach(arr=>{
    let m = Math.max(...arr);
    if(max<m) max = m;
});

/* 3.출력 */
console.log(max);