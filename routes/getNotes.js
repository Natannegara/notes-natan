const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.get('/notes', function (req, res) {
    let result = db.get()
    res.send(result)
})

module.exports = app