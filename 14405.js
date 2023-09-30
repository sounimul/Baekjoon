/* 14405 피카츄 */

/* input.txt
   pikapi
*/

/* input.txt
   pipikachu
*/

/* input.txt
   pikaqiu
*/

/* input.txt
   piika
*/

/* input.txt
   chupikachupipichu
*/

let input = require('fs').readFileSync('input.txt').toString().trim();
const regExp = /(pi)|(ka)|(chu)/g;
input = input.replace(regExp, '');

if(input.length===0) console.log('YES');
else console.log('NO');