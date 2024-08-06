// import {hi,bye} from './module1'
// --> cannot use 'import' to import in commonJS. Use require function

let add = require('./module');
const addedResult = add.add(5,5);  // add function is enclosed in object. with badd object using spread operator
console.log(addedResult);

const multiply = require('./module2');  // only one export. and that too without enclosed in an object
multiply(2,6);

const imports = require('./module1');
console.log(imports);
console.log(imports.hi);
console.log(imports.bye);