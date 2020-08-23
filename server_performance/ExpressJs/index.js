var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, from express js.
    </body>
    </html>
  `);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});