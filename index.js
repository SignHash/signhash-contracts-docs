const { spawn } = require('child_process');
const { join } = require('path');

const args = [
  'run',
  '--rm',
  'doxity'
];

const outPath = join(__dirname, '..', 'dist');

const child = spawn('docker-compose', args, {
  cwd: join(__dirname, 'docker')
});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
child.on('close', code => {
  if (code !== 0) {
    console.error('Failed to generate docs: ', code);
  } else {
    console.log(`Saved generated docs to ${outPath}`);
  }
});
