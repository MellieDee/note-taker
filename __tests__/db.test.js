const fs = require('fs');
const createNewNote = require('../lib/notes.js');
const notes = require('../db/db.json');

jest.mock('fs')

test('creates a note object', () => {
  const  note = createNewNote(
    { title: 'Darlene', text: 'jhgdja3ng2' },
    notes
  );
   expect(note.title).toBe('Darlene');
   expect(note.text).toBe('jhgdja3ng2');
});