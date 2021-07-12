const router = require('express').Router();
// const { writeNote, findNote, validateNote } = require('../../lib/notes');
// const { message } = require('../../db.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req,res) => {
    let everyNote = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    everyNote = JSON.parse(everyNote);
    res.json (everyNote);
});

router.post('/notes', (req,res) => {
    let everyNote = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    everyNote = JSON.parse(everyNote);
    let newNote = req.body
    newNote.id = uuidv4();
    everyNote.push(newNote)
    // saves the message to the json file
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), 
    JSON.stringify(everyNote));
    everyNote = JSON.parse(everyNote);
    res.json (everyNote);
});

router.delete('/notes/:id', (req,res) => {
    let everyNote = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    everyNote = JSON.parse(everyNote);
    let noteID = req.params.id
    everyNote = everyNote.filter(note => {
        return noteID !== note.id
    })
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), 
    JSON.stringify(everyNote));
    everyNote = JSON.parse(everyNote);
    res.json (everyNote); 
});

// router.get('/notes/:id', (req,res) => {
//     req.body.id = notesArray.length.toString();

//     if (!validateNote(req.body)){
//         res.status(400).send('Please make sure the informtion is correct')
//     } else {
//         writeNote()
//     }
// })

module.exports = router;