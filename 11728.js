/* 11728 배열 합치기 */

/* input.txt
   2 2
   3 5
   2 9
*/

/* input.txt
   2 1
   4 7
   1
*/

/* input.txt
   4 3
   2 3 5 9
   1 4 7
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const info1 = input[1].split(" ").map(Number);
const info2 = input[2].split(" ").map(Number);

const len1 = info1.length;
const len2 = info2.length;
let ind1 = 0;
let ind2 = 0;

let answer = "";

while (1) {
  if (len1 <= ind1 && len2 <= ind2) break;

  if (len1 <= ind1) {
    answer += `${info2[ind2]} `;
    ind2++;
  } else if (len2 <= ind2) {
    answer += `${info1[ind1]} `;
    ind1++;
  } else {
    if (info1[ind1] > info2[ind2]) {
      answer += `${info2[ind2]} `;
      ind2++;
    } else {
      answer += `${info1[ind1]} `;
      ind1++;
    }
  }
}

console.log(answer.trim());
