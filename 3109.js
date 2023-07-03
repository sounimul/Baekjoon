/* 3109 빵집 */

/* input.txt
   5 5
   .xx..
   ..x..
   .....
   ...x.
   ...x.
*/

/* input.txt
   6 10
   ..x.......
   .....x....
   .x....x...
   ...x...xx.
   ..........
   ....x.....
*/


/* 1.입력 */
const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [r,c] = input[0].split(' ').map(Number);
let map = input.slice(1).map(str=>str.split(''));

let answer =0;

const dr = [-1,0,1];
const dc = [1,1,1];

/* 2.계산 */
for(let i=0;i<r;i++){

        if(map[i][0]==='.') {
            if(dfs(i,0)) answer++;
        }
}

function dfs(x,y){
    
    map[x][y] = 'x';
    
    if(y===c-1) return true;
    
    for(let k=0;k<3;k++){
        const nx = x+dr[k];
        const ny = y+dc[k];
        if(nx>=0 && ny>=0 && nx<r && ny<c && map[nx][ny]==='.'){
            map[nx][ny] = 'x';
            if(dfs(nx,ny)) return true;
        }
    }

    return false;
}

/* 3.출력 */
console.log(answer);