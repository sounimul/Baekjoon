/* 11404 플로이드 */

/* input.txt
   5
   14
   1 2 2
   1 3 3
   1 4 1
   1 5 10
   2 4 2
   3 4 1
   3 5 1
   4 5 3
   3 5 10
   3 1 8
   1 4 2
   5 1 7
   3 4 2
   5 2 4
*/


/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("\n");

const n = +input[0]
// const m = +input[1]
let route = input.slice(2,-1);

/* 2.계산 */
route = route.map(str => str.split(' ').map(Number));

let answer = Array.from(new Array(n), () => new Array());

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i===j) answer[i][j] = 0;
        else answer[i][j] = Infinity;
    }
}

route.map(arr=>{
    let temp = answer[arr[0]-1][arr[1]-1];
    
    if(temp === 0 || (temp !== 0 && temp > arr[2])) 
    answer[arr[0]-1][arr[1]-1] = arr[2];
})

const floyd = function(dist) {
    for(let k=0;k<n;k++){
        for(let s=0;s<n;s++){
            for(let e=0;e<n;e++){
                if(dist[s][e] > dist[s][k]+dist[k][e])
                dist[s][e] = dist[s][k] + dist[k][e];
            }
        }
    }
}

floyd(answer);
    
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(answer[i][j]===Infinity) answer[i][j] = 0;
    }
}

/* 3.출력 */
answer.forEach(arr=>{
    let str = arr.join(" ");
    console.log(str);
})