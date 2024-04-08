// Load the HTTP module
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
