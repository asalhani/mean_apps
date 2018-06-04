// var obj = {
//     name: "adib"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "adib", "age":25}';
// var personObj = JSON.parse(personString);
//  console.log(typeof personObj);
//  console.log(personObj);

const fs = require('fs');

// save object to file system (notes.json)
var originalNote = {title: 'my title', body: 'my new body'};
fs.writeFileSync('notes.json', JSON.stringify(originalNote));

// read content from json file (reverse operation)
var retrivedNote = JSON.parse(fs.readFileSync("notes.json"));
console.log(retrivedNote);