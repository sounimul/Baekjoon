/* 9324 진짜 메시지 */

/* input.txt
   3
   BAPC
   AABA
   ABCABCBBAAACC
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const N = +input[0];
const messages = input.slice(1);

for (let i = 0; i < messages.length; i++) {
  let count = {};
  let message = messages[i].split("");
  message.push(" ");
  let result = "OK";
  for (let j = 0; j < message.length; j++) {
    if (count[message[j]]) {
      count[message[j]]++;
      if (count[message[j]] === 3) {
        if (message[j + 1] === message[j]) {
          count[message[j]] = 0;
          j += 1;
        } else {
          result = "FAKE";
          count[message[j]] = 0;
          break;
        }
      }
    } else count[message[j]] = 1;
  }
  console.log(result);
}
