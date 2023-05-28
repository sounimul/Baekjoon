/* 11060 점프 점프 */

/* input.txt
   10
   1 2 0 1 3 2 1 5 4 2
*/


/* 1.입력 */
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

/* 2.계산 */
const n = +input[0];
const arr = input[1].split(' ').map(Number);

let answer = -1;
let queue = [[0,0]]; //arr의 index, 점프 횟수

while(queue.length!==0){

    [spot, cnt] = queue.shift();
    
    if(spot===n-1){
        answer = cnt;
        break;
    }
    
    if(spot+arr[spot]>=n-1){
        answer = cnt+1;
        break;
    }
    
    let temp = [];

    for(let i=1;i<=arr[spot];i++){
        if(spot+i>=n) break;
        if(arr[spot+i]!==0) temp.push([spot+i,cnt+1]);
    }

    temp.sort((a,b) => (a[0]+arr[a[0]]) - (b[0]+arr[b[0]]));
    if(temp.length!==0) queue.push(temp.pop());

}

/* 3.출력 */    
console.log(answer);