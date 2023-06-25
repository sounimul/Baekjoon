/* 1446 지름길 */

/* input.txt
   5 150
   0 50 10
   0 50 20
   50 100 10
   100 151 10
   110 140 90
*/

/* input.txt
   2 100
   10 60 40
   50 90 20
*/

/* input.txt
   8 900
   0 10 9
   20 60 45
   80 190 100
   50 70 15
   160 180 14
   140 160 14
   420 901 5
   450 900 0
*/


/* 1.입력 */
const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [n,d] = input[0].split(' ').map(Number);
const s = input.slice(1).map(str=>str.split(' ').map(Number));

let dist = Array.from({length: d+1}, () => Infinity);
let shortcut = {};
s.forEach(arr=>{
    if(arr[2]<=arr[1]-arr[0] && arr[1]<=d){
        if(shortcut[arr[0]]){
            shortcut[arr[0]].push([arr[1],arr[2]]);
        }else {
            shortcut[arr[0]] = [[arr[1],arr[2]]];
        }
    }
})

/* 2.계산 */
let spot = -1;

for(let i=0;i<=d;i++){
    if(i>0) spot = dist[i-1];
    dist[i] = Math.min(dist[i], spot+1);

    if(shortcut[i]){
        shortcut[i].forEach(arr=>{
        dist[arr[0]] = Math.min(dist[arr[0]], dist[i]+arr[1]);
        })
    }
}

/* 3.출력 */
console.log(dist[d]);