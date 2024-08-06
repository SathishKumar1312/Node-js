const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('this is from the node js home page!! Bonjour!');
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});    //default
        res.write('<h1>Hello World</h1>');
        res.end();
    }
    else if(req.url=='/book'){
        let html = fs.readFileSync(path.join(__dirname, '../book.html'), 'utf-8');
        let name = "sathish kumar";
        html = html.replace("{{name}}",name);
        res.end(html)
    }
    else if(req.url=='/bookStream'){
        stream = fs.createReadStream(__dirname+'/book.html');
        stream.pipe(res);
        stream.on('error', (err) => {
            res.writeHead(500);
            res.end('Internal Server Error');
        });
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