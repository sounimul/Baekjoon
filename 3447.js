/* 3447 버그왕 */

/* input.txt
   print "No bugs here..."

   void hello() {
   BUGBUG
   printfBUG("Hello, world!\n");
   }

   wriBUGBUGtelBUGn("Hello B-U-G");
*/

let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

while(1) {
    let check = 0;
    
    for(let i=0;i<input.length;i++){
        if(input[i].includes('BUG')){
            input[i] = input[i].replaceAll('BUG','');
            check++;
        }
    }
    
    if(check===0) break;
}

console.log(input.join('\n'));