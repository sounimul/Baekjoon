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

let clear = [];
let cnt = [];
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(matrix[i][j] && !clear.includes(`${i} ${j}`)) {
            let a = dfs(i,j).length;
            cnt.push(a);
        }
    }
}

cnt.sort((a,b)=>a-b);

/* 3.출력 */
console.log(cnt.length);
let answer = '';
cnt.forEach(s => answer += `${s}\n`);
console.log(answer);

function dfs(x,y){
    
    let visited = [];
    let stack = [];
    
    stack.push(`${x} ${y}`);
    
    while(stack.length !==0) {
    let node = stack.shift();
    
    let link = [];
    
    for(let i=0;i<4;i++){
        const nx = +node.split(' ')[0] + dx[i];
        const ny = +node.split(' ')[1] + dy[i];
        if(0<=nx && 0<=ny && n>nx && n>ny && matrix[nx][ny] ){
            link.push(`${nx} ${ny}`);
        }
    }

    link = link.filter(ind => !visited.includes(ind));

    if(!visited.includes(node)){
        visited.push(node);
        clear.push(node);
        stack = [...link, ...stack];
        }
    }
    return visited;
}