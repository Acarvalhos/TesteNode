const http = require('http');
const server = http.createServer();
const router = require('./router');

server.on('request', function (request, response) {
  router(request, response);
});

server.listen(3000);
console.log('Server is running.');