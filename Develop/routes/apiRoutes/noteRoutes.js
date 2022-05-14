const router = require('express').Router();
const notes = require('../../db/db.json');
const {
    createNewNote,
    deleteNote
} = require ('../../lib/notes');


router.get('/notes', (req, res) => {
    
    console.log(notes, 'get request');
    res.json(notes)
});

router.post('/notes', (req, res) => {
    // console.log(req.body);
    let noteInput = req.body;
    let noteArr = notes;
    // console.log(req.body, 'req body');

     const newNote = createNewNote(noteInput, noteArr);

    res.json(newNote);

});

// router.delete('/notes:id', (req, res) => {
//     let noteId = req.params.id;
//     let noteArray = notes;
//      deleteNote(noteId, noteArray)
//      res.json ()
// })

 module.exports = router;