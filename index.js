const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ texto: "<h1>Hello-World</h1>" }));

}).listen(3000, err => {
    err ? console.log(err) : console.log("Servidor rodando na porta 3000")
}); 