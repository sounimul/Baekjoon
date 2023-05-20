/* 2644 촌수계산 */

/* input.txt
   9
   7 3
   7
   1 2
   1 3
   2 7
   2 8
   2 9
   4 5
   4 6
*/

/* input.txt
   9
   8 6
   7
   1 2
   1 3
   2 7
   2 8
   2 9
   4 5
   4 6
*/

/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

/* 2.계산 */
const n = +input[0];
[a,b] = input[1].split(' ').map(Number);
const people = +input[2];
const graph = input.slice(3).map(a => a.split(' ').map(Number));

let family = new Array(n).fill([]);

graph.forEach(info=>{
    family[info[0]-1] = [...family[info[0]-1], info[1]];
    family[info[1]-1] = [...family[info[1]-1], info[0]];
})

function dfs(graph, start, end){
    
    const visited = [];
    
    let stack = [[start,0]];
    
    while(stack.length!==0){
        
        [node, cnt] = stack.shift();
        if(!visited.includes(node)){
            visited.push(node);
            let need = family[node-1].map(item => [item,cnt+1]);
            stack = [...need, ...stack];
        }
        if(node===end) return cnt;
    }   
    return -1;
}

/* 3.출력 */
console.log(dfs(graph, a, b));