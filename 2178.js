/* 2178 미로 탐색 */

/* input.txt
   4 6
   101111
   101010
   101011
   111011
*/

/* input.txt
   4 6
   110110
   110110
   111111
   111101
*/

/* input.txt
   2 25
   1011101110111011101110111
   1110111011101110111011101
*/

/* input.txt
   7 7
   1011111
   1110001
   1000001
   1000001
   1000001
   1000001
   1111111
*/


/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

/* 2.계산 */
[n,m] = input[0].split(' ').map(x=>Number(x)-1);
let matrix = input.slice(1).map(str=>str.split('').map(Number));

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

let queue = [[0,0,1]];
let answer = 0;

while(queue.length!==0){

    [x,y,c] = queue.shift();
    
    if(x===n && y===m){
        answer = c;
        break;
    }
    
    for(let i=0;i<8;i++){
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx>=0 && nx<=n && ny>=0 && ny<=m && matrix[nx][ny]) {
            queue.push([nx,ny,c+1]);
            matrix[nx][ny]=0;
        }
    }
    
}

console.log(answer);       