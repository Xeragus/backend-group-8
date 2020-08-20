var express = require('express')
var router = express.Router()
const people = []

router
  .get('/people', (req, res) => {
    res.send({
      message: 'Here are all the people currently in our database',
      items: people
    })
  })
  .post('/people', (req, res) => {
    people.push(req.body)

    res.send({
      message: 'Here are all the people currently in our database including the newly created one',
      items: people
    })
  })

module.exports = router
