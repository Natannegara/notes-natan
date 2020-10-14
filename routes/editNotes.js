const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.patch('/notes', function (req, res) {
    const body = req.body
    const idQuery = req.query.id
    const idBody = req.body.id
    const parseIdQuery = parseInt(idQuery)
    const parseIdBody = parseInt(idBody)


    // checking wheter this Id exist in data or not
    const findIdQuery = db.findIdQuery(parseIdQuery)
    const findIdBody = db.findIdBody(parseIdBody)

    // if data is exist, it will edit the data
    if (findIdQuery || findIdBody) {
        db.edit(body, parseIdQuery)
        body.id = parseIdQuery;
        res.send(body);
    } else {
        res.status(404).send("the ID isn't availabe in database IF you insert an ID in query that's not available in database")
    }
})

module.exports = app