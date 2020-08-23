const { exec } = require('child_process');
//const util = require('util');
//const exec = util.promisify(require('child_process').exec);

const ssh = exec('ssh msfadmin@192.168.1.206');
//console.log('stdout:', ssh.stdout);
//console.error('stderr:', ssh.stderr);

ssh.stdout.on('data', (data) => {
    console.log(`[STDOUT|DATA] ${data}`);
})

ssh.stdin.on('drain', (event) => {
    console.log("[STDIN] Write");
})

ssh.on('close', (code) => {
    //console.log(result);
    console.log(`child process exited with code ${code}`);
});

setTimeout(() => {
    ssh.kill();
}, 5000)

/* async function lsExample() {
  //const { stdout, stderr } = await exec('ls');
  const ssh = await exec('ssh msfadmin@192.168.1.206');
  console.log('stdout:', ssh.stdout);
  console.error('stderr:', ssh.stderr);

  ssh.stdin.write('msfadmin', (event) => {
      console.log("[STDIN] Write");
  })

  ssh.on('close', (code) => {
    //console.log(result);
    console.log(`child process exited with code ${code}`);
  });

  setTimeout(() => {
    ssh.kill();
  }, 5000)
}
lsExample(); */


/* /const ls = spawn('ls', ['-lh', '/usr']);
//const DOMParser = require('xmldom').DOMParser;

const ssh = exec('ssh', ['msfadmin@192.168.1.206']);

//let result = '';

ssh.stdout.on('data', (data) => {
  console.log(`----------------`);
  console.log(`stdout: ${data}`);
  console.log(`----------------`);

  //result += data;
});

ssh.on('message', (event) => {

})

ssh.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ssh.on('close', (code) => {

    //console.log(result);
    console.log(`child process exited with code ${code}`);
});


setTimeout(() => {
    ssh.kill();
}, 5000)
 */