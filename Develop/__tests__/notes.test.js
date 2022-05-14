const notes = require('../db/db.json');

const fs = require('fs');

const {
    createNewNote,
    deleteNote
} = require ('../lib/notes');

jest.mock('fs');

test("creates a new note", () => {
    const note = createNewNote({title: "jkhasdfkj", Text: "klasjdflkajsdf;l"},
    notes
    );

    expect(note.title).toBe(note.title);
    expect(note.Text).toBe(note.Text);
});


