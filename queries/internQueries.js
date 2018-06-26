const database = require("../database-connection");

module.exports = {
   list() {
       return database('internship').select()
   },
   read(id) {
       return database('internship').select().where('id', id).first()
   },
   create(internship) {
       return database('internship').insert(internship).returning('*').then(record => record[0])
   },
   update(id, internship) {
       return database('internship').where('id', id).update(internship, '*').then(record => record[0])
   },
   delete(id) {
       return database('internship').where('id', id).del()
   }
};