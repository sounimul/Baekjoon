/* 2439 별 찍기-2 */

/* input.txt
   5
*/


const n = +require('fs').readFileSync('input.txt').toString()
const star = new Array(n).fill(' ');

for(let i=1;i<=n;i++){
    let str = [...star];
    for(let j=1;j<=i;j++){
        str[n-j] = '*';
    }
    console.log(str.join(''));
}