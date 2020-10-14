// ------------ INSTALLING EXPRESS AND BODY-PARSER ------------
const express = require('express')
const bodyParser = require('body-parser')

// ------------ IMPORTING ROUTES ------------
const getNotes = require('./routes/getNotes')
const addNotes = require('./routes/addNotes')
const delNotes = require('./routes/delNotes')
const editNotes = require('./routes/editNotes')

const app = express()
app.use(bodyParser.json())

// ------------ APPLYING ROUTES INTO SERVER ------------
app.use(getNotes)
app.use(addNotes)
app.use(delNotes)
app.use(editNotes)

// ------------ WELCOMING SCREEN TO OPENING WEB ------------
app.get('/', function (req, res) {
  res.send('Welcome to my page')
})

// ------------ DEFINING PORT ------------
const port = 5000
app.listen(port, () => {
  console.log("Server listens at http://localhost:", port);
})










