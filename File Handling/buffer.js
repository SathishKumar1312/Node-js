let buffer = new Buffer.from('sathish');


console.log(`HexaDecimal unicode character code of buffer '${buffer.toString()}' is :`,
    buffer,'\n');

console.log(`Binary is :`,buffer.toJSON());

buffer.write('overwrite');

console.log(`HexaDecimal unicode character code of buffer '${buffer.toString()}' is :`,
    buffer,'\n');

setTimeout(()=>{
    console.log("converted from buffer",buffer.toString())
},5000)