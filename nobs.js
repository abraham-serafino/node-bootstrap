#! /usr/bin/env node

const fs = require('fs');
const exec = require('shelljs').exec;

function usage() {
  console.log();
  console.log('Usage: nobs {command}');
  console.log('       nobs [add|remove] [package1 package 2...]');
  console.log('');
  console.log('Valid commands are:');
  console.log('');
  console.log('    build        - build the app from scratch (using grunt clean)');
  console.log('    test         - run all tests in the "tests" folder using jasmine');
  console.log('    run          - launch your app in a browser');
  console.log('    debug        - same as "run," but adds node-inspector for server-side debugging');
  console.log('    add / remove - add or remove the specified packages');
  console.log('    help         - show this message');
  console.log('');

  process.exit(1);
}

console.log('NoBS - (No)de (B)oot(s)trap');

let args = process.argv.slice(2);
let command = '';

if (args.length <= 0) {
  command = 'grunt run';

} else {

  switch (args[0]) {
  case 'add':
    command = 'npm install --save';
    break;

  case 'remove':
    command = 'npm remove --save';
    break;

  case 'build':
    command = 'node_modules/grunt-cli/bin/grunt rebuildAll';
    break;

  case 'run':
    command = 'node_modules/grunt-cli/bin/grunt run';
    break;

  case 'test':
    command = 'node_modules/grunt-cli/bin/grunt test';
    break;

  case 'debug':
    command = 'node_modules/grunt-cli/bin/grunt debug';
    break;

  default:
    usage();
    break;
  }
}

console.log('');

try {
  fs.statSync('node_modules/grunt-cli');

} catch (e) {
  console.log('Installing dependencies (may take awhile if this is the first time)...')
  exec('npm install');
}

args = args.slice(1);
exec(`${command} ${args.join(' ')}`);
