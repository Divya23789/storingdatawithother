
const http = require('http');

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end('<h2>Hiya !! </h2> <br> <b>This message from web server running on docker container!</b><br>');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
