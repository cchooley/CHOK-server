const database = require("../database-connection");

module.exports = {
    list() {
        return database('internship').select()
    },
    read(id) {
        return database('internship').select().where('id', id).first()
    },
    readInternship(id) {
        return database('internship').innerJoin('student', 'internship.id', 'student.internship_id')
        .where('internship.id', id)
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

/*


router.get('/:id/students', (req, res, next) => {
  knex('internships')
    .join('students', 'internships.id', 'students.internship_id')
    .where('internships.id', req.params.id)
    .then(result => res.json(result))
    .catch((err) => {
      next(err)
    })
})

*/