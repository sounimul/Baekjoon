/* 1316 그룹 단어 체커 */

/* input.txt
   3
   happy
   new
   year
*/

/* input.txt
   4
   aba
   abab
   abcabc
   a
*/

/* input.txt
   5
   ab
   aa
   aca
   ba
   bb
*/

/* input.txt
   2
   yzyzy
   zyzyz
*/

/* input.txt
   1
   z
*/

/* input.txt
   9
   aaa
   aaazbz
   babb
   aazz
   azbz
   aabbaa
   abacc
   aba
   zzaz
*/


const input = require('fs').readFileSync("input.txt").toString().split("\n");
const string = input.slice(1);

let answer=0;

function check(str){
    let c = {};
    let last="";
    
    for(let i=0;i<str.length;i++){
        let s = str[i];
        if(s!== last && !c[s]){
            c[s]=1;
        }else if(s===last) {
            continue
        }else return false
        
        last=s;
    }
    return true;
}

for(let i=0;i<string.length;i++){
    if(check(string[i])) answer++;
}

console.log(answer);