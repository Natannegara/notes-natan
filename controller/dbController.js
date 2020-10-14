const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ notes: [] })
    .write()

function get() {
    return db
        .get('notes')
        .value()
}

function edit(body, parseIdQuery) {
    return db
        .get('notes')
        .find({ id: parseIdQuery })
        .assign(body)
        .write()
}

function findIdQuery(parseIdQuery) {
    return db
        .get('notes')
        .find({ id: parseIdQuery })
        .value()
}

function findIdBody(parseIdBody) {
    return db
        .get('notes')
        .find({ id: parseIdBody })
        .value()
}

function del(parseIdQuery) {
    return db
        .get('notes')
        .remove({ id: parseIdQuery })
        .write()
}

function add(body) {
    return db
        .get('notes')
        .push(body)
        .write()
}

module.exports = { get, edit, findIdQuery, findIdBody, del, add }