const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {

    path = url.parse(req.url).pathname;
    path = '' || '/' ? '/index.html' : path;
    const fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
        if(err){
            res.writeHead(404, { "Content-Type": "text/html;charset=utf-8"});
            res.end("<h1>Page not found</h1>")
        }else{
            res.writeHead(200, { "Content-Type": "text/html"});
            res.write(data);
            res.end();
        }

    });

}).listen(3000, err => {
    err ? console.log(err) : console.log("Servidor rodando na porta 3000")
}); 