/* 11557 Yangjojang of The Year */

/* input.txt
   2
   3
   Yonsei 10
   Korea 10000000
   Ewha 20
   2
   Yonsei 1
   Korea 10000000
*/

const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const C = +input[0];

for(let i=1;i<input.length;i++){
    const n = +input[i];
    let uni = input.slice(i+1,i+1+n).map(el => el.trim().split(' '));
    i += n;
    uni.sort((a,b) => +b[1] - +a[1]);
    console.log(uni[0][0]);
}
