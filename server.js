const h = require('http');
const fs = require('fs');

const server = h.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello form Node Server\n')
            return;
        }
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/html');
        res.end(data);
    });
})
server.listen(5000, () => {
    console.log('server running on port 3000');
});