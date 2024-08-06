const fs = require('fs');

const readStream = fs.createReadStream('../textFiles/sample.txt',{
    encoding : 'utf-8',
    highWaterMark : 4
})

const writeStream = fs.createWriteStream('../textFiles/writtenStream.txt',{
    flags : 'a'
});

readStream.pipe(writeStream);

// readStream.on('data',(chunks)=>{
//     console.log(chunks);
//     writeStream.write(chunks);
// });