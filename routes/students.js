var express = require('express');
var router = express.Router();
const knex = require('knex')

const queries = require('../queries/studentQueries')

function validPost(student) {
  const validName = typeof student.name == 'string'
  const validEmail = typeof student.email == 'string' 
    && student.email.includes('@')
    && student.email.includes('.')
  const validPicture = typeof student.picture == 'string'
    && (student.picture.includes('.jpg')
    || student.picture.includes('.gif')
    || student.picture.includes('.png'))
  const validSchool = typeof student.school == 'string'
  const validPw = typeof student.school == 'string' && student.password.length >= 6
  const validInterests = typeof typeof student.interests == 'string'

  return validName && validEmail && validPicture && validSchool && validPw && validInterests
}

router.get('/', function(request, response, next) {
  queries.list().then(students => {
    response.json({ students })
  }).catch(next)
})

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(student => {
    student
      ? response.json ({ student })
      : response.status(404).json({ message: 'Not Found' })
  }).catch(next)
})

router.post('/', (request, response, next) => {
  if (validPost(request.body)) {
    queries.create(request.body).then(student => {
      response.status(201).json({ student })
    }).catch(next)
  } else {
    response.json({ error: "That did not work" })
  }
})

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({ deleted: true })
  }).catch(next)
})

router.put('/:id', (request, response, next) => {
  console.log(request.params.id)
  console.log(request.body)
  queries.update(request.params.id, request.body).then(student => {
    response.json({ student: student[0] })
  }).catch(next)
})

module.exports = router;
