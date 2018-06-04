const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
// console.log('command: ', command);
// console.log('process: ', process.argv);
// console.log('yargs: ', argv)

switch (command) {
    case "add":
        notes.addNote(argv.title, argv.body);
        break;
    case "list":
        notes.getAll();
        break
    case "read":
    debugger;
        var note = notes.getNote(argv.title);
        if(note){
            console.log(`Title: ${note.title}.`);
            console.log(`Body: ${note.body}.`);
        }
        else {
            console.log("note not found..");
        }
        break;
    case "remove":
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed' : 'note not found';
    console.log(message);
        break;
    default:
        console.error(`command  ${command} not supported yet...`);
}

