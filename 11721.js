/* 11721 열 개씩 끊어 출력하기 */

/* input.txt
   BaekjoonOnlineJudge
*/

/* input.txt
   OneTwoThreeFourFiveSixSevenEightNineTen
*/


let str = require('fs').readFileSync('input.txt').toString();
const n = Math.ceil((str.length-1)/10);

for(let i=0;i<n;i++){
    if(i===n-1) console.log(str);
    else console.log(str.slice(0,10));
    str = str.slice(10);
}