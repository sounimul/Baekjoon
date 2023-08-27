/* 27964 콰트로치즈피자 */

/* input.txt
   4
   CheddarCheese MozzarellaCheese GoudaCheese GranaPadanoCheese
*/

/* input.txt
   4
   MozzarellaCheese MozzarellaCheese MozzarellaCheese MozzarellaCheese
*/

/* input.txt
   4
   CheeseBurger CheeseBall CheeseCake CheeseRavioli
*/

/* input.txt
   7
   C Chess cheese Cheesa Cheesz Cheesp Cheese
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const list = input[1].split(" ");
let cheese = {};

list.forEach((c) => {
  if (!cheese[c] && c.endsWith("Cheese")) cheese[c] = 1;
});

if (Object.keys(cheese).length > 3) console.log("yummy");
else console.log("sad");
