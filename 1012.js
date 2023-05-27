/* 1012 유기농 배추 */

/* input.txt
   2
   10 8 17
   0 0
   1 0
   1 1
   4 2
   4 3
   4 5
   2 4
   3 4
   7 4
   8 4
   9 4
   7 5
   8 5
   9 5
   7 6
   8 6
   9 6
   10 10 1
   5 5
*/

/* input.txt
   1
   5 3 6
   0 2
   1 2
   2 2
   3 2
   4 2
   4 0
*/

/* 1.입력 */
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

/* 2.계산 */
const t = +input[0];
input = input.slice(1).map(item=>item.trim());

for(let c=0;c<t;c++){
    [m,n,k] = input[0].split(' ').map(x=>Number(x));
    let spot =  input.slice(1,1+k);
    count(m,n,k,spot);
    input = input.slice(1+k);
}

function count(m,n,k,spot){
    
    let matrix = [];
    let temp = [];
    
    for(let i=0;i<n;i++){
        temp = [];
        for(let j=0;j<m;j++){
            if(spot.includes(`${j} ${i}`)) temp.push(1);
            else temp.push(0);
        }
        matrix.push(temp);
    }

    let cnt = 0;
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j]) {
                cnt++;
                bfs(i,j);
            }
        }
    }
    
    function bfs(a,b){
        let queue = [[a,b]];
        let answer = 0;
        
        const dx = [0, 1, 0, -1];
        const dy = [-1, 0, 1, 0];
        
        while(queue.length!==0){
            
            [x,y] = queue.shift();
            if(matrix[x][y]) matrix[x][y]=0;
            
            for(let i=0;i<4;i++){
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx>=0 && nx<n && ny>=0 && ny<m && matrix[nx][ny]) {
                    queue.push([nx,ny]);
                    matrix[nx][ny]=0;
                }
            }
            
        };
    }
    /* 3.출력 */
    console.log(cnt); 
}