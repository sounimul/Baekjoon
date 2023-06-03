/* 2615 오목 */

/* input.txt
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 1 2 0 0 2 2 2 1 0 0 0 0 0 0 0 0 0 0
   0 0 1 2 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0
   0 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 1 2 2 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 1 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 2 1 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
*/


/* 1.입력 */
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
input = input.map(str=>str.split(' ').map(Number));

/* 2.계산 */
let answer = 0;
let [xx,yy] = [0,0];

function check(x, y, w){

    //↘
    let c = 0;

    let nx = x;
    let ny = y;

    if(x-1<0 || y-1<0 || (x-1>=0 && y-1>=0 && input[x-1][y-1]!==w)){
     
        for(let k=1;k<5;k++){
        
        nx += 1;
        ny += 1;
        
        if(nx>=0 && nx<19 && ny>=0 && ny<19 && input[nx][ny]===w){
            continue;
        }
        else {
            c = -1;
            break;
        }
        }
        
        nx++;
        ny++;
       
        if(c!==-1 && (nx>18 || ny>18 ||(nx<19 && ny<19 && input[nx][ny]!==w))) {
            return [w,x+1,y+1];
        }   
    }

    //↙
    c=0;
    nx = x;
    ny = y;

    if(x-1<0 || y+1>18 || (x-1>=0 && y+1>=0 && input[x-1][y+1]!==w)){
         for(let k=1;k<5;k++){
    
            nx += 1;        
            ny -= 1;
            
            if(nx>=0 && nx<19 && ny>=0 && ny<19 && input[nx][ny]===w){
                continue;
            }
            else {
                c = -1;
                break;
            }
        }
        
        nx++;
        ny--;
        if(c!==-1 && (nx>18 || ny<0  || (nx<19 && ny>=0 && input[nx][ny]!==w)) ) {
            return [w,nx,ny+2];
        }   
    }

    //↓
    c=0;
    nx = x;
    ny = y;

    if(x-1<0 || (x-1>=0 && input[x-1][y]!==w)){
        for(let k=1;k<5;k++){
        nx += 1;
        if(nx>=0 && nx<19 && input[nx][y]===w){
            continue;
        }
        else {
            c = -1;
            break;
        }
        }
        
        nx++;
        
        if(c!==-1 && (nx>18 || (nx<19 && input[nx][y]!==w))) {
            return [w,x+1,y+1];
        }
    }

    //→
    c=0;
    nx = x;
    ny = y;

    if(y-1<0 || (y-1>=0 && input[x][y-1]!==w)){
        for(let k=1;k<5;k++){
        ny += 1;
        
        if(nx>=0 && nx<19 && input[x][ny]===w){
            continue;
        }
        else {
            c = -1;
            break;
        }
        }
    
        ny++;
                
        if(c!==-1 && (ny>18 ||(ny<19 && input[x][ny]!==w))) {
            return [w,x+1,y+1];
        }else {
            return [0,x,y];
        }        
    }
    else return[0,x,y];

}

for(let i=0;i<19;i++){
    for(let j=0;j<19;j++){
        
        if(input[i][j] !== 0) {
            [answer,xx,yy] = check(i,j,input[i][j]);
        }
        
        if(answer!==0){
            break;
        }
    }

    if(answer!==0){
        break;
    }
  
}

/* 3.출력 */
if(answer!==0) console.log(`${answer}\n${xx} ${yy}`);
else console.log(0);