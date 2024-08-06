const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime-types');


/*
 @params res - response to be used within createServer
 @params filepath - filepath to be used within createServer
 @params contentType - content type to be used within createServer
*/

// Function to serve static files, REPEATABLE CODE! WRAPPED IN FUNCTION
function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error',err);
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

const server = http.createServer((req,res)=>{

    // FILEPATH FOR STATIC FILES, EXCEPT HTML :
    let filePath = path.join(__dirname,req.url);

    // CONTENT TYPE FOR REQUESTED FILE USING LOOKUP FUNCTION :
    let contentType = mime.lookup(filePath) || 'application/octet-stream';

    if(req.url === '/'){
        res.end('this is from the node js home page!! Bonjour!');
    }

    // STATIC FILES :

    // HTML PAGE
    else if(req.url=='/views/book'){        // WORKING ONLY WHEN /VIEWS/BOOK , NOT IN /BOOK
        let stream = fs.createReadStream(path.join(__dirname, 'views', 'book.html'));
        stream.pipe(res);
    }

    // CSS PAGE
    else if(req.url=='/views/blstyle.css'){
        serveStaticFile(res,filePath,contentType);
    }

    // IMAGES
    else if (req.url.startsWith('/images')) {
        serveStaticFile(res,filePath,contentType);
    }

    else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end(`<h1>NoT from correct URL, you are from ${req.url}</h1>
            <h3><a href="/">Go back to home</a></h3>`);
    }
})

server.listen(5000,()=>{
    console.log("server running on port 5000")
});