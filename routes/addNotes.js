const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.post('/notes', function (req, res) {
    const body = req.body

    // checking wheter this Id exist in data or not
    const findIdQuery = db.findIdQuery()
    const findIdBody = db.findIdBody()

    // if data is exist already, so it wont work
    if (findIdQuery || findIdBody) {
        res.status(409).send("there's a confict IF you insert an object WITH THE SAME ID")
    } else {
        db.add(body)
        res.send(body)
    }
})

module.exports = app