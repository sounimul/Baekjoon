/* 1937 욕심쟁이 판다 */

/* input.txt
   4
   14 9 12 10
   1 11 5 4
   7 15 2 13
   6 3 16 8
*/


/* 1.입력 */
const input = require('fs').readFileSync('input.txt').toString().split('\n');
const n = +input[0];
const feed = input.slice(1).map(str=>str.split(' ').map(Number));

let eat = Array.from({length:n},()=>[]);
eat = eat.map(arr=>Array.from({length:n},()=>1));

const dx = [0,1,0,-1];
const dy = [1,0,-1,0];

let cnt = 0;
let answer = 0;

/* 2.계산 */
function move(x,y){
    
    if(eat[x][y] != 1) return eat[x][y];
    
    for(let i=0;i<4;i++){
        const nx = x + dx[i];
        const ny = y + dy[i];
        if(nx>=0 && ny>=0 && nx<n && ny<n && feed[x][y] < feed[nx][ny]){
            eat[x][y] = Math.max(eat[x][y], move(nx,ny) + 1);
        }
    }
    return eat[x][y];
}

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        answer = Math.max(answer,move(i,j));
    }
}

/* 3.출력 */
console.log(answer);