// tslint:disable:no-console

import { spawn } from 'child_process';
import { createWriteStream } from 'fs';
import { join } from 'path';

const args = [
  'run',
  '--rm',
  'doxity'
];

const outPath = join(__dirname, '..', 'docs');
const outStream = createWriteStream(outPath);

const child = spawn('docker-compose', args, {
  cwd: join(__dirname, '..', 'docker')
});

child.stdout.pipe(outStream);
child.stderr.on('data', chunk => {
  console.error(chunk.toString());
});

child.on('close', code => {
  if (code !== 0) {
    console.error('Failed to generate docs: ', code);
  } else {
    console.log(`Saved generated docs to ${outPath}`);
  }
});
