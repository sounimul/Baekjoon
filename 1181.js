/* 1181 단어 정렬 */

/* input.txt
   13
   but
   i
   wont
   hesitate
   no
   more
   no
   more
   it
   cannot
   wait
   im
   yours
*/


let input = require('fs').readFileSync('input.txt').toString().split('\n');
input = [...new Set(input)];
input = input.filter(str => isNaN(str));

const str = {};

input.forEach(s=>{
    if(str[s.length]) str[s.length].push(s);
    else str[s.length] = [s];
})

let answer = '';

Object.keys(str).forEach(item=>{
    str[item].sort();
    answer += str[item].join('\n') + '\n';
})

console.log(answer.trim());