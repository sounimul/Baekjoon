/* 10974 모든 순열 */

/* input.txt
   3
*/

const N = +require("fs").readFileSync("input.txt").toString();
let num = [];
for (let i = 1; i <= N; i++) {
  num.push(i);
}

function getPermutation(arr, select) {
  const result = [];

  if (select === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const n = getPermutation(rest, select - 1);
    const attached = n.map((el) => [fixed, ...el]);

    result.push(...attached);
  });

  return result;
}

let answer = "";
getPermutation(num, N).forEach((per) => (answer += `${per.join(" ")}\n`));
console.log(answer.trim());
