const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`Request for: ${req.url}`);

    // Route for the homepage
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File Not Found: Make sure index.html is in the same folder!');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data); // This sends the file content to the browser
            }
        });
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server is active at http://localhost:3000');
});