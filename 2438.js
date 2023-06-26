/* 2438 별 찍기-1 */

/* input.txt
   5
*/


const n = +require('fs').readFileSync('input.txt').toString()

for(let i=1;i<=n;i++){
    let star = '';
    for(let j=1;j<=i;j++){
        star += '*';
    }
    console.log(star);
}