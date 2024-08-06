const fs = require('fs');
console.log('start');

fs.readFile('../textFiles/sample.txt','utf-8',(err,readfile)=>{
    if(err){
        console.log(`error is`,err);
        return null;
    }

    console.log(readfile)
});

fs.writeFile('../textFiles/writtenAsync.txt','\nThis is written from asynchronously',(err)=>{
    if(err){
        console.log(`error is`,err);
        return null;
    }

    //There is no second parameter as it does write only function.(append too)
});

// CallBack must be included, otherwise error occurs
console.log('stop');
