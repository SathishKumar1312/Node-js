const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

// console.log(OS.cpus().length);
// console.log(cluster.isMaster);

if (cluster.isMaster) {
    console.log(`Master process ${process.pid}is running `);
    cluster.fork();
    cluster.fork();
    console.log('Worker started');
} else {
    const server = http.createServer((req, res) => {

        if (req.url == '/') {
            res.writeHead(200, {'Content-Type':'text/plain'});
            res.end("Home page");
        } else if (req.url == "/slow") {
            res.writeHead(200, {"Content-Type": "text/plain"});
            for (let i = 0; i < 6000000000; i++) {}
            res.end("Slow page");
        }
    });
    server.listen(5000, () => {
        console.log("server running on port 5000")
    });
}