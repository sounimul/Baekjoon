/* 10798 세로읽기 */

/* input.txt
   ABCDE
   abcde
   01234
   FGHIJ
   fghij
*/

/* input.txt
   AABCDD
   afzz
   09121
   a8EWg6
   P5h3kx
*/

let input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(str => str.trim().split(''));
let len = 0;
let answer = '';

input.forEach(s =>{
    if(len<s.length) len = s.length;
})

for(let i=0;i<len;i++){
    for(let j=0;j<5;j++){
        if(input[j][i]) answer += input[j][i];
    }
}

console.log(answer);