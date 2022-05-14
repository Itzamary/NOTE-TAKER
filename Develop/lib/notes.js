const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');



function createNewNote(noteBody, noteArray){
    const note = noteBody
    note.id = uniqid();
    noteArray.push(note);

    fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
    console.log(noteArray, 'notesArray');
    return noteArray;
};

function deleteNote (noteId, jsonArray){
    const readFile = fs.readFile('../../db/db.json', (err, data) => {

    })
}


module.exports = {
    createNewNote,
    deleteNote
};