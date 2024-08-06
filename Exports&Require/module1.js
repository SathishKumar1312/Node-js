let hi = 'hi';
let bye = 'bye';

module.exports = {hi,bye};

module.exports.one = 1;
module.exports.two = 2;

const array = [1,2,3,4,5];

module.exports.Array = array;

console.log('this is from Module 1 to test if this has been logged on to the console',module.exports);
