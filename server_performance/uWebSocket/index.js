const uWS = require('./node_modules/uWebSockets.js/uws.js');
const port = 8080;

const app = uWS.App().get('/', (res, req) => {

  res.end('Hello uWebSocket World!');
}).listen(port, (token) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});