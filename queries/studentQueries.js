const database = require("../database-connection");
const authUtils = require('../utils/auth')

module.exports = {
    list() {
        return database('student').select()
    },
    read(id) {
        return database('student').select().where('id', id).first()
    },
    readByEmail(email) {
        return database('student').select().where('email', email).first()
    },
    create(student) {
        student.password = authUtils.hashPassword(student.password)
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