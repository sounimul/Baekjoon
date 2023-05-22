/* 2667 단지번호붙이기 */

/* input.txt
   7
   0110100
   0110101
   1110101
   0000111
   0100000
   0111110
   0111000
*/

/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
    
/* 2.계산 */
n = +input[0];

let matrix = [];
input.slice(1,).forEach(arr=> matrix.push(arr.split('').map(Number)));

//왼쪽 아래 오른쪽 위
const dx = [-1,0,1,0];
const dy = [0,1,0,-1];

let cnt = [];
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(matrix[i][j]) cnt.push(bfs(i,j));
    }
}

function bfs(i,j){
            
    let queue = [[i,j]];
    let count = 0;
    
    let visited = {};
    visited[[i,j]] = true;
    
    // let log = [];
    
    while(queue.length!==0){
        
        [x,y] = queue.shift();
        
        // log.push([x,y]);
        
        matrix[x][y] = 0;
        count++;
        
        for(let k=0;k<4;k++){
            const nx = x + dx[k];
            const ny = y + dy[k];
            if(nx>=0 && ny>=0 && nx<n && ny<n && matrix[nx][ny] && !visited[[nx,ny]]) {
                queue.push([nx,ny]);
                visited[[nx,ny]] = true;
            }
        }

    }
    // console.log(log, '\n');
    return count;
}
cnt.sort((a,b)=>a-b);

/* 3.출력 */
console.log(cnt.length);
let answer = '';
cnt.forEach(s => answer += `${s}\n`);
console.log(answer);