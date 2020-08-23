

const http = require('http')

const options = {
  hostname: '192.168.56.1',
  port: 22,
  method: 'GET'
}
const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
})

req.on('error', (error) => {
  console.error(`[ERROR] ${error}`)
})

req.setTimeout(2000, (something) => {
    console.log(`End by timeout - ${something}`);
})

req.end() 
 