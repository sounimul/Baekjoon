/* 2573 빙산 */

/* input.txt
   5 7
   0 0 0 0 0 0 0
   0 2 4 5 3 0 0
   0 3 0 2 5 2 0
   0 7 6 2 4 0 0
   0 0 0 0 0 0 0
*/

/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
    
/* 2.계산 */
[n, m] = input[0].split(' ').map(Number);
let matrix = input.slice(1,).map(line=>line.split(' ').map(Number));

let year = 0;
//왼쪽 아래 오른쪽 위
const dx = [-1,0,1,0];
const dy = [0,1,0,-1];

while(1){

    year++;
    let temp = [];
    let cnt = 0;
    let check = false;

    //녹은 빙산 구하기
    matrix.forEach(arr=>temp.push([...arr]));

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(temp[i][j]) {
                for(let k=0;k<4;k++){
                    const nx = i + dx[k]; 
                    const ny = j + dy[k];
                    if(temp[nx][ny]===0 && matrix[i][j]>=1) matrix[i][j]--;
                }
            }
        }
    }

    //분리된 빙산의 개수 구하기
    temp = [];
    matrix.forEach(arr=>temp.push([...arr]));

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(temp[i][j]) {
                cnt++;
                dfs(temp,i,j);
                check = true;
            }
        }
    }
        
    if(!check) { //빙산이 다 녹은 경우
        year = 0;
        break;
    }else if(cnt>=2)break; //빙상이 두 덩어리 이상으로 분리되는 경우

}

function dfs(m,x,y){
    
    m[x][y]=0;
    
    for(let k=0;k<4;k++){
        const nx = x + dx[k]; 
        const ny = y + dy[k];
        if(m[nx][ny]) dfs(m, nx, ny);
    }

    return;
}

/* 3.출력 */
console.log(year);