/* 10828 스택 */

/* input.txt
   14
   push 1
   push 2
   top
   size
   empty
   pop
   pop
   pop
   size
   empty
   pop
   push 3
   empty
   top
*/

/* input.txt
   7
   pop
   top
   push 123
   top
   pop
   top
   pop
*/


const input = require('fs').readFileSync('input.txt').toString().split('\n').map(item=>item.replace(/\r/g,""));
const command = input.slice(1).map(str=>str.split(' '));
let stack = [];
let result = "";

command.forEach(item=>{
    if(item[0]==='push'){
        stack.push(+item[1]);
    }else if(item[0]==='top'){
        if(stack.length===0) result += "-1\n";
        else result += `${stack.at(-1)}\n`;
    }else if(item[0]==='size'){
        result += `${stack.length}\n`;
    }else if(item[0]==='pop'){
        if(stack.length===0)  result += '-1\n';
        else result += `${stack.pop()}\n`;
    }else if(item[0]==='empty'){
        if(stack.length===0) result += "1\n";
        else result += "0\n";
    }
})

console.log(result);