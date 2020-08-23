const nanoexpress = require('nanoexpress');

const app = nanoexpress();

app.get('/', (req, res) => {
  res.setHeaders({"Connection": "keep-alive"}).end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, from NANO EXPRESS.
    </body>
    </html>
  `);
});

app.listen(8080);
