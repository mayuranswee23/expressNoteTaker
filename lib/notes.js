
const fs = require('fs');
const path = require('path');


function writeNote (body, message){
    const notes = body;
    // const message = {
    //     "title": "title", 
    //     "text": "text",
    //     "id": "id"
    // }
    noteArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ noteArray })
    );
    return message;
}

function findNote (id, notesArray) {
    const note = notesArray.filter(message => message.id === id)[0];
    return note;
}

function validateNote (message){
    if (!message.title || typeof message.title !== 'string'){
        return false;
    }
    if (!message.text || typeof message.text !== 'string'){
        return false;
    }
    return true;
}

module.exports = {
    writeNote, 
    findNote, 
    validateNote
}
