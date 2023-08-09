/* 10814 나이순 정렬 */

/* input.txt
   3
   21 Junkyu
   21 Dohyun
   20 Sunyoung
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
let member = input.slice(1).map((str) => str.split(" "));

member = member.sort((a, b) => +a[0] - +b[0]);

let answer = "";
member.forEach((name) => (answer += `${name[0]} ${name[1]}\n`));
console.log(answer.trim());
