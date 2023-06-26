/* 2440 별 찍기-3 */

/* input.txt
   5
*/


const n = +require('fs').readFileSync('input.txt').toString()

for(let i=1;i<=n;i++){
    let star = '';
    for(let j=n;j>=i;j--){
        star += '*';
    }
    console.log(star);
}