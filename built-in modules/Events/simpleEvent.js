const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order-pizza',(size = `"default value(not specified)"`,topping = `"default value(not specified)"`)=>{
    console.log(`Your pizza order is received! It is of ${size} with topping of ${topping}`);
})
emitter.on('order-pizza',(size)=>{
    if(size) {
        console.log("size mentioned : "+size);
    }
    if(size=="large"){
        console.log(`Your complementary drink is coke for "${size}"`);
    }
})

console.log('actually works in synchronous,');

emitter.emit('order-pizza');
console.log('\n');
emitter.emit('order-pizza','small');
console.log('\n');
emitter.emit('order-pizza','large','mushroom');