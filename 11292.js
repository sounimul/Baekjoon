/* 11292 키 큰 사람 */

/* input.txt
   3
   John 1.75
   Mary 1.64
   Sam 1.81
   2
   Jose 1.62
   Miguel 1.58
   5
   John 1.75
   Mary 1.75
   Sam 1.74
   Jose 1.75
   Miguel 1.75
   0
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const num = +input[i];
  if (num === 0) break;
  const height = input
    .slice(i + 1, i + 1 + num)
    .map((el) => el.split(" "))
    .sort((a, b) => b[1] - a[1]);
  let max = height[0][1];
  let answer = "";
  for (let j = 0; j < height.length; j++) {
    if (height[j][1] === max) answer += `${height[j][0]} `;
    else break;
  }
  console.log(answer);
  i += num;
}
