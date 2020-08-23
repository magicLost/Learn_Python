const http = require('http');

const port = 8080;

const server = http.createServer((request, response) => {

    console.log(request.headers['x-forwarded-for']);

    console.log(`[REQUEST IP] ${request.connection.remoteAddress}`);
    //console.log(request.headers);

    console.log(response.getHeaders());

    response.end('Hello Node.js Server!');

});

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
})