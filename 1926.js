/* 1926 그림 */

/* input.txt
   6 5
   1 1 0 1 1
   0 1 1 0 0
   0 0 0 0 0
   1 0 1 1 1
   0 0 1 1 1
   0 0 1 1 1
*/

/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

[n,m] = input[0].split(' ').map(Number);
const paper = input.slice(1,).map(arr=>arr.split(' ').map(Number));

/* 2.계산 */
let answer = [];
let cnt = 0;

        
// 왼 아래 오 위
const dx = [-1,0,1,0];
const dy = [0,1,0,-1];

for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        cnt = 0;
        if(paper[i][j]) answer.push(dfs(i,j));
    }
}

function dfs(x,y) {
    
    paper[x][y]=0;
    cnt++;
    
    // console.log(cnt);
    // console.log(paper);

    for(let k=0;k<4;k++){
        const nx = x + dx[k];
        const ny = y + dy[k];
        if(nx>=0 && ny>=0 && nx<n && ny<m && paper[nx][ny]===1) {
            dfs(nx,ny);
        }
    }
    return cnt;
}

/* 3.출력 */
if(answer.length===0) console.log(`0\n0`);
else console.log(`${answer.length}\n${Math.max(...answer)}`);