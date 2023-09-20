/* 11179 2진수 뒤집기 */

/* input.txt
   13
*/

/* input.txt
   47
*/

const N = +require('fs').readFileSync('input.txt').toString();
const binary = N.toString(2).split('').map(Number);

let decimal = 0;
const len = binary.length;

for(let i=0;i<len;i++){
    decimal += binary[i] * Math.pow(2,i);
}

console.log(decimal);