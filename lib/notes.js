const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');



function createNewNote(noteBody, noteArray) {
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

function deleteNote(noteId, jsonArray) {
    // console.log(noteId, 'NoteId');
    // console.log(jsonArray, 'jsonArray');


    jsonArray.forEach((objElem, i, array) => {

        if (objElem.id === noteId) {

            jsonArray.splice(i, 1)
            console.log(array, 'array');
            console.log(jsonArray, );
           fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(jsonArray));
        }

    })
console.log(jsonArray);
    return jsonArray;

}



module.exports = {
    createNewNote,
    deleteNote
};