/* 1157 단어 공부 */

/* input.txt
   Mississipi
*/

/* input.txt
   zZa
*/

/* input.txt
   z
*/

/* input.txt
   baaa
*/

const input = require('fs').readFileSync('input.txt').toString().trim().toUpperCase().split('');
let dic = {};

input.forEach(el => {
    if(dic[el]) dic[el]++;
    else dic[el] = 1;
})

let answer = [];

Object.keys(dic).forEach(key => {
    answer.push([key, dic[key]])
});

let max = answer.sort((a,b) => b[1]-a[1])[0][1];
if(input.length>1 && answer[1][1]===max) console.log('?');
else console.log(answer[0][0]);