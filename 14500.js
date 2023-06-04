/* 14500 테트로미노 */

/* input.txt
   5 5
   1 2 3 4 5
   5 4 3 2 1
   2 3 4 5 6
   6 5 4 3 2
   1 2 1 2 1
*/

/* input.txt
   4 5
   1 2 3 4 5
   1 2 3 4 5
   1 2 3 4 5
   1 2 3 4 5
*/

/* input.txt
   4 10
   1 2 1 2 1 2 1 2 1 2
   2 1 2 1 2 1 2 1 2 1
   1 2 1 2 1 2 1 2 1 2
   2 1 2 1 2 1 2 1 2 1
*/


/* 1.입력 */
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const paper = input.slice(1,).map(line=>line.split(' ').map(Number));

/* 2.계산 */
let sum = [];

function getSum(x,y){
    let temp = [];
    
		// Case 1
    let dx = [0,0,0,0];
    let dy = [0,1,2,3];
    let s = 0;
    let c = 1;
    
    let answer = 0;
    
    for(let i=0;i<4;i++){
        let ny = y+dy[i];
        
        if(ny>=0 && ny<m){
          s += paper[x][ny];  
        }else{
          c = -1;
          break;
        }
    }
    
    if(answer < s) answer = s;

		// Case 2    
    dx = [0,1,2,3];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        
        if(nx>=0 && nx<n){
          s += paper[nx][y];  
        }else{
          c = -1;
          break;
        }
    }
    
    if(answer < s) answer = s;

		// Case 3
    dx = [0,0,1,1];
    dy = [0,1,0,1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;
    
		// Case 4
    dx = [0,1,2,2];
    dy = [0,0,0,1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){ 
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }
    
    if(answer < s) answer = s;

		// Case 5
    dx = [0,1,2,2];
    dy = [0,0,0,-1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 6
    dx = [0,0,1,2];
    dy = [0,1,0,0];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }
    
    if(answer < s) answer = s;

		// Case 7
    dx = [0,0,1,2];
    dy = [0,1,1,1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }
    
    if(answer < s) answer = s;

		// Case 8
    dx = [0,1,0,0];
    dy = [0,0,1,2];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 9
    dx = [0,0,0,1];
    dy = [0,1,2,2];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;
    
		// Case 10
    dx = [0,1,1,1];
    dy = [0,0,1,2];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 11
    dx = [0,0,0,-1];
    dy = [0,1,2,2];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }
    
    if(answer < s) answer = s;

		// Case 12    
    dx = [0,1,1,2];
    dy = [0,0,1,1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 13
    dx = [0,1,1,2];
    dy = [0,0,-1,-1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 14
    dx = [0,0,-1,-1];
    dy = [0,1,1,2];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 15
    dx = [0,0,1,1];
    dy = [0,1,1,2];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 16
    dx = [0,0,0,1];
    dy = [0,1,2,1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 17
    dx = [0,0,0,-1];
    dy = [0,1,2,1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 18
    dx = [0,1,2,1];
    dy = [0,0,0,1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }

    if(answer < s) answer = s;

		// Case 19
    dx = [0,-1,0,1];
    dy = [0,1,1,1];
    s = 0;
    c = 1;
    
    for(let i=0;i<4;i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        
        if(nx>=0 && nx<n && ny>=0 && ny<m){
          s += paper[nx][ny];  
        }else{
          c = -1;
          break;
        }
    }
    
    if(answer < s) answer = s;
    
    return answer;
}

/* 3.출력 */
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        sum.push(getSum(i,j));
    }
}

console.log(Math.max(...sum));