const fs = require('fs');
const FILE_NAME = 'notes-data.json';
const _ = require('lodash');

var fetchNotes = () => {
    try {
        let notesStr = fs.readFileSync(FILE_NAME);
        return JSON.parse(notesStr);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
};

var addNote = (title, body) => {


    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };
    // get all saved notes


    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        console.log("note added");
    }
    else {
        console.log("note duplicated...");
    }
};

var getAll = () => {
    console.log("list all notes");
}

var getNote = (title) => {
    var notes = fetchNotes();
    var note = notes.filter((note) => note.title === title);
    if (note.length > 0)
        return note[0];
    else return null;
    
    return note;
}

var removeNote = (title) => {
    var notes = fetchNotes();
    // var updatedNotes = _.remove(allNotes, function(n){
    //     return n.title !== title;
    // });
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};