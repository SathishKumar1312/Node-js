const fs = require('node:fs/promises');

//now fs returns a promise

fs.readFile('../textFiles/sample.txt', 'utf-8')
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e))

// async function is syntactic sugar built on top of promises.

async function fileHandle() {
    try {
        const data = await fs.readFile('../textFiles/sample.txt', 'utf-8');
        console.log(data);
    }
    catch(e) {
        console.log(e);
    }
}

fileHandle();