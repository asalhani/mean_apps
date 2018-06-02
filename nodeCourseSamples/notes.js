var addNote = (title, body) => {
    console.log('adding note: ', title, body);
};

var getAll = () =>{
    console.log("list all notes");
} 

var getNote = (title) =>{
    console.log("get note by title");
}

var removeNote = (title) =>{
    console.log("remove note by title");
}

module.exports = {
    addNote,
    getAll,
    getNote, 
    removeNote
};