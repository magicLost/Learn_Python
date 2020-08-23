const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function nmap() {
  //const { stdout, stderr } = await exec('ls');
  const nmap = await exec('nmap 127.0.0.1');
  console.log('stdout:', nmap.stdout);
  console.error('stderr:', nmap.stderr);

  nmap.on('close', (code) => {
    //console.log(result);
    console.log(`child process exited with code ${code}`);
  });
}
nmap();
 

/* const { spawn } = require('child_process');
//const ls = spawn('ls', ['-lh', '/usr']);
const DOMParser = require('xmldom').DOMParser;

const nmap = spawn('nmap', ['-oX', '-', '192.168.56.1']);

let xmldoc = '';

nmap.stdout.on('data', (data) => {
  //console.log(`----------------`);
  //console.log(`stdout: ${data}`);
  //console.log(`----------------`);
  xmldoc += data;
});

nmap.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

nmap.on('close', (code) => {

    var doc = new DOMParser().parseFromString(
        xmldoc
        ,'text/xml');
    console.log(doc);
    console.log(`child process exited with code ${code}`);
});
 */
