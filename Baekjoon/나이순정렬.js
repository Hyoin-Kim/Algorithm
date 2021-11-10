//10814번 나이순 정렬
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('');

const len = input.shift();
input.sort((a,b)=>a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n")); 