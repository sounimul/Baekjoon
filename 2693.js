/* 2693 N번째 큰 수 */

/* input.txt
   4
   1 2 3 4 5 6 7 8 9 1000
   338 304 619 95 343 496 489 116 98 127
   931 240 986 894 826 640 965 833 136 138
   940 955 364 188 133 254 501 122 768 408
*/

const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = +input[0];
for(let i=1;i<=N;i++){
    console.log(input[i].split(' ').map(Number).sort((a,b) => b-a)[2]);
}