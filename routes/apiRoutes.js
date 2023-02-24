const path = require('path');
const fs = require('fs')
const router = require('express').Router();
const uuid = require('../helpers/uuid');
const notes = require('../db/db.json')
// read the db.json file

// fs.readFile('db/db.json', 'utf8', (err,data)=>{
//     let notes = JSON.parse(data)
// })
// store whats read into a variable

router.get('/notes', (req,res)=>{
    fs.readFile('db/db.json', 'utf8', (err,data)=>{
        let notes = JSON.parse(data)
        res.json(notes)
    })
})

router.get('/notes', (req,res) =>{
notes.findOne(
    {
        where:{
            id: req.params.id
        },
    }
).then((noteData) => {
    res.json(noteData);
  });
});

router.post('/notes', (req,res)=>{
    let newNote = {
        title: req.body.title,
        text:req.body.text,
        id: uuid()
    }
    notes.push(newNote)
fs.writeFileSync('db/db.json', JSON.stringify(notes))
res.json(newNote)
})



router.delete('/notes/:id', (req, res) => {
// make sure the note is in db.json file
for( let i = 0; i < notes.length; i++) {
    console.log(notes[i].id)
    if (notes[i].id === req.params.id) {
        notes.splice(i, 1)
    }
} 
// map over the file
// remove specific note
// rewrite file without note
fs.writeFileSync('db/db.json', JSON.stringify(notes))
res.json(notes)
  });
  
module.exports = router
// let newObj = {text:'WBHRE', id:'huf2f'}

// console.log(newObj.text)