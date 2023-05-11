/* 1904 01타일 */

/* input.txt
   5
   1 2
   2 3
   4 5
   6 7
   4
*/


/* 1.입력 */
const n = +(require('fs').readFileSync(0));

/* 2.계산 */
let tiles = [];
tiles.push(1,1);

for(let i=2;i<=n;i++){
    tiles[i] = (tiles[i-2]+tiles[i-1])%15746;
}

/* 3.출력 */
console.log(tiles[n]);