const { Worker } = require('node:worker_threads');

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Home page");
    } else if (req.url == "/slow") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        const worker = new Worker('./worker.js');
        worker.on("message", (data) => {
            res.end(`Slow page ${data}`);
        })
    }
});
server.listen(5000, () => {
    console.log("server running on port 5000")
});