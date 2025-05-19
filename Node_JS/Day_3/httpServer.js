const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)

    if(req.url === '/' && req.method === 'GET'){
        res.writeHead(200, { "content-Type" : 'text/html' });
        res.end(`<h1>Welcome to the Blog API </h1>`)   
    } else if(req.url === '/about' && req.method === 'GET'){
        res.writeHead(200, { 'content-Type' : 'text/plain' });
        res.end('About Page')
    } else {
        res.writeHead(404, { 'content-Type' : 'text/plain' });
        res.end('404 Not Found')
    }
  
})

server.listen(3001, (err) => {
    if(err) throw err;
    else console.log("Server Started..!")
} )