var express = require('express');
var router = express.Router();

const queries = require('../queries/internQueries')


router.get('/', function(request, response, next) {
  queries.list().then(internships => {
    response.json({ internships })
  }).catch(next)
})

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(internship => {
    internship
      ? response.json ({ internship })
      : response.status(404).json({ message: 'Not Found' })
  }).catch(next)
})

router.post('/', (request, response, next) => {
  queries.create(request.body).then(internship => {
    response.status(201).json({ internship: internship })
  }).catch(next)
})

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({ deleted: true })
  }).catch(next)
})

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(internship => {
    response.json({ internship: internship[0] })
  }).catch(next)
})

module.exports = router;
