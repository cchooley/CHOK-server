var express = require('express');
var cors = require('cors');
var morgan = require('morgan')
var bodyParser = require('body-parser')

var app = express();

const internships = require('./routes/internships')
const students = require('./routes/students')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'Bettership database'
  })
})

app.use('/internships', internships)
app.use('/students', students)

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err.stack : {}
  })
});

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

module.exports = app;
