const http = require('http');

const server = http.createServer((req,res)=>{
    const api = {
        name: "sathish",
        age: 22,
        role: 'fullstack'
    }
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(api));
})

server.listen(3000,()=>{
    console.log("server running on port 3000")
});