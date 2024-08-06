const add = (a,b) => {
    // console.log(a+b);
    return a + b;
}
let badd = 5;
module.exports = {add};
module.exports = {...module.exports,badd};
// console.log('a is',a);