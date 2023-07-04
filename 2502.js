/* 2502 떡 먹는 호랑이 */

/* input.txt
   6 41
*/

/* input.txt
   7 218
*/


const arr = require('fs').readFileSync('input.txt').toString().split(' ').map(Number);

function give(day){
    if(day===1) return 'a';
    else if(day===2) return 'b';
    else return give(day-1) + give(day-2);
}

let num = {
    a:0,
    b:0
}

give(arr[0]).split('').forEach(s=>{
    num[s]++;
})

let one = 1;
let two = 1;

while(1){
    
    two = (arr[1] - (num['a']*one)) / num['b'];
    if(Number.isInteger(two) && one<=two && one*num['a'] + two*num['b'] === arr[1]) break;
    
    one++;
}

console.log(one);
console.log(two);