const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = process.argv[2];
// console.log('command: ', command);
// console.log('process: ', process.argv);
console.log('yargs: ', argv)

switch (command) {
    case "add":
        notes.addNote(argv.title, argv.body);
        break;
    case "list":
        notes.getAll();
        break
    case "read":
        notes.getNote("");
        break;
    case "remove":
        notes.removeNote('');
        break;
    default:
        console.error(`command  ${command} not supported yet...`);
}

