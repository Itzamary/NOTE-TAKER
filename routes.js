const router = require('express').Router();
const notes = require('./db/db.json');
const path = require('path');
const {
    createNewNote,
    deleteNote
} = require ('./lib/notes');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

router.get('/api/notes', (req, res) => {
    
    console.log(notes, 'get request');
    res.json(notes)
});

router.post('/api/notes', (req, res) => {
    // console.log(req.body);
    let noteInput = req.body;
    let noteArr = notes;
    // console.log(req.body, 'req body');
    console.log(noteArr);

     const newNote = createNewNote(noteInput, noteArr);

    res.json(newNote);

});

router.delete('/api/notes/:id', (req, res) => {
    let noteId = req.params.id;
    let noteArray = notes;
    console.log('triggered');
    const deleteTheNote = deleteNote(noteId, noteArray)
     res.json(deleteTheNote);
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

 module.exports = router;