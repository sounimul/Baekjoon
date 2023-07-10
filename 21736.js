/* 21736 헌내기는 친구가 필요해 */

/* input.txt
   3 5
   OOOPO
   OIOOX
   OOOXP
*/

/* input.txt
   3 3
   IOX
   OXP
   XPP
*/


/* 1.입력 */
const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const campus = input.slice(1).map(str=>str.split(''));

let visited = Array.from({length:n},()=>[]);
visited = visited.map(arr=>new Array(m).fill(1));

let cnt = 0;

const dx = [1,0,-1,0];
const dy = [0,1,0,-1];

/* 2.계산 */
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(campus[i][j]==='I'){
            move(i,j);
            break;
        }
    }
}

function move(x,y){

    visited[x][y] = -1;
    
    for(let i=0;i<4;i++){
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx>-1 && nx<n && ny>-1 && ny<m && visited[nx][ny]===1 && campus[nx][ny]!=="X"){
            if(campus[nx][ny]==='P') cnt++;
            move(nx,ny);
        }
    }
}

/* 3.출력 */
if(cnt===0) console.log('TT');
else console.log(cnt);