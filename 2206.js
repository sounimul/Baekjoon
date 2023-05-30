/* 2206 벽 부수고 이동하기 */

/* input.txt
   6 4
   0100
   1110
   1000
   0000
   0111
   0000
*/

/* Queue 구현*/
class Node {
  constructor(x, y, c, k) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.k = k;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  push(x, y, c, k) {
    let node = new Node(x, y, c, k);
    if (this.size === 0) {
      this.front = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.size++;
  }
  shift() {
    let temp = this.front;
    if (this.size === 0) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    this.size--;
    return temp;
  }
  length() {
    return this.size;
  }
}

/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

/* 2.계산 */
[n,m] = input[0].split(' ').map(x=>Number(x));
let matrix = input.slice(1).map(str=>str.split('').map(Number));

const visited = Array.from(new Array(n), () => new Array());
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        visited[i][j] = new Array(2).fill(0);
    }
}

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

let queue = new Queue();
queue.push(0,0,1,0);
let answer = -1;

while(queue.length()){
    
    let temp = queue.shift();
    const [x,y,c,k] = [temp.x, temp.y, temp.c, temp.k];
    if(x===n-1 && y===m-1){
        answer = c;
        break;
    }
    
    for(let i=0;i<4;i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx>=0 && nx<n && ny>=0 && ny<m) {

                if(k===0 && matrix[nx][ny]===0 && visited[nx][ny][k]===0 ){
                    queue.push(nx,ny,c+1,0);
                    visited[nx][ny][k] = visited[x][y][k] + 1;             
                }else if(k===0 && matrix[nx][ny]===1 && visited[nx][ny][k]===0){
                    queue.push(nx,ny,c+1,1);
                    visited[nx][ny][1] = visited[x][y][k] + 1;  
                }else if(k===1 && matrix[nx][ny]===0 && visited[nx][ny][k]===0){
                    queue.push(nx,ny,c+1,1);
                    visited[nx][ny][k] = visited[x][y][k] + 1;
                }
            }
    } 
}

/* 3.출력 */
console.log(answer);