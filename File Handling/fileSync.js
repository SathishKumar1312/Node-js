//fileSync module
const fs = require('fs');
console.log('start');

// File Reading
const output = fs.readFileSync('../textFiles/sample.txt','utf8');

console.log(output);
console.log(output.at(-1));


const s = 'haha this is template literal'

// File writing
fs.writeFileSync('../textFiles/written.txt',`\nsomething to be written : ${s}, and the readfile is '${output}'`,{flag: 'a'});

// flag is for append "a"
console.log('stop');
