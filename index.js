const http = require('http');
const url = require('url');
const fs = require('fs');


function handleFile(req, res, callback) {
    let path = url.parse(req.url).pathname;
    path = path === ('' || '/') ? '/index.html' : path;
    const fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
        if(err){

            if(callback){
                if(!callback(req, res)){
                    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8"});
                    res.end("<h1>Page not found</h1>")
                };
            }
        }else{
            res.writeHead(200, { "Content-Type": "text/html"});
            res.write(data);
            res.end();
        }

    });
};

function handleRequest(req, res){
    let path = url.parse(req.url).pathname;
    path = path === ('' || '/') ? '/index.html' : path;

    if(path === '/test'){
        res.end("Test");
        return true;
    };

    return false;
};


http.createServer((request, response) => {

    handleFile(request, response, handleRequest);
    

}).listen(3000, err => {
    err ? console.log(err) : console.log("Servidor rodando na porta 3000")
}); 