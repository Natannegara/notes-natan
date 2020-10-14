const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.delete('/notes', function (req, res) {
    const id = req.query.id
    const idQuery = parseInt(id)

    // checking wheter this Id exist in data or not
    const find = db.findIdQuery(idQuery)
    // if data is exist, it will remove the data
    if (find) {
        db.del(idQuery)
        res.send('Ok')
    } else (
        res.status(404).send("that the ID isn't availabe in database IF you insert an ID in query that's not available in database")
    )
})


module.exports = app