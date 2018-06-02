const fs = require('fs');
const FILE_NAME = 'notes-data.json';

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title: title,
        body: body
    };
    // get all saved notes
    try {
        let notesStr = fs.readFileSync(FILE_NAME);
        if (notesStr.length > 0)
            notes = JSON.parse(notesStr);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log("list all notes");
}

var getNote = (title) => {
    console.log("get note by title");
}

var removeNote = (title) => {
    console.log("remove note by title");
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};