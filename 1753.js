/* 1753 최단경로 */

/* input.txt
   5 6
   1
   5 1 1
   1 2 2
   1 3 3
   2 3 4
   2 4 5
   3 4 6
*/

/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
const [v, e] = input[0].split(' ').map(Number);
const k = +input[1]
const link = input.slice(2,-1).map(str=>str.split(' ').map(Number));

/* 2.계산 */
let info = {};
link.forEach(arr=>{
    if(info[arr[0]]) info[arr[0]].push([arr[1],arr[2]]);
    else info[arr[0]] = [[arr[1],arr[2]]];
})

let d = new Array(v).fill(Infinity);
d[k-1] = 0;

let visited = new Array(v).fill(false);

function short(start){
    
    d[start-1] = 0;
    visited[start-1] = true;

    if(info[start]){
        info[start].forEach(arr=>{
        if(d[arr[0]-1] > arr[1]) d[arr[0]-1] = arr[1];
        })
    }

    for(let i=0;i<v;i++){
        
        let s = getStart();
        visited[s] = true;
        
        if(info[s+1]){
            info[s+1].forEach(arr=>{
            if(d[arr[0]-1] > d[s]+arr[1]) {
                d[arr[0]-1] = d[s]+arr[1]; 
            }
            })
        }
    }
    
}

function getStart(){
    
    let min = Infinity;
    let index = 0;
    
    for(let i=0;i<v;i++){
        if(min>d[i] && !visited[i]) {
            min = d[i];
            index = i;
        }
    }
    
    return index;
}

short(k);

/* 3.출력 */
d.forEach(w=>{
    if(w===Infinity) console.log("INF");
    else console.log(w);
})