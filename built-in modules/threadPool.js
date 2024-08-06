// THREADPOOL

// process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('node:crypto');

console.log('UV_THREADPOOL_SIZE:', process.env.UV_THREADPOOL_SIZE);

let start = Date.now();
for(let i=0;i<10;i++){
    crypto.pbkdf2("password","hi",100000,512,"sha512",()=>{
        console.log(`hash is : ${i+1}` ,Date.now() - start);
    })
}

// let start2 = Date.now();
// for(let i=0;i<2;i++){
//     crypto.pbkdf2Sync("password","hi",100000,512,"sha512");
//     console.log("Sync hash is : " ,Date.now() - start2);
// }
