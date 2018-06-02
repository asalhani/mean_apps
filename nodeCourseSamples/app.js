const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var command = process.argv[2];
console.log(command);
console.log(process.argv);