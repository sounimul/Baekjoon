/* 2442 별 찍기-5 */

/* input.txt
   5
*/


const n = +require('fs').readFileSync('input.txt').toString()

for(let i=0;i<n;i++){
    let star = '';
    for(let j=1;j<=n+i;j++){ //오른쪽 공백은 출력하지 않음
        if(j>=n-i) star += '*';
        else star += ' ';
    }
    console.log(star);
}