const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello-World");

}).listen(3000, err => {
    err ? console.log(err) : console.log("Servidor rodando na porta 3000")
});