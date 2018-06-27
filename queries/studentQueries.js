const database = require("../database-connection");

module.exports = {
    list() {
        return database('student').select()
    },
    read(id) {
        return database('student').select().where('id', id).first()
    },
    readByName(name) {
        return database('student').select().where('name', name).first()
    },
    create(student) {
       return database('student').insert(student).returning('*').then(record => record[0])
    },
    update(id, student) {
        console.log(id, student)
        return database('student').where('id', id).update(student, '*')
    },
    delete(id) {
        return database('student').where('id', id).del()
    }
};