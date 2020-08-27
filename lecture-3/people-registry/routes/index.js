var express = require('express')
var router = express.Router()
let people = []

const findPerson = id => {
  return people.find(person => person.id == id)
}

router
  .get('/people', (req, res) => {
    res.send({
      message: 'Here are all the people currently in our database',
      items: people
    })
  })
  .post('/people', (req, res) => {
    const resContent = {
      error: false,
      message: 'Here are all the people currently in our database including the newly created one',
      items: people
    }

    try {
      if (req.body.name) {
        if (req.body.lastname) {
          let maxId = 0
          people.forEach(person => {
            if (person.id > maxId) maxId = person.id
          })

          req.body.id = maxId + 1
          people.push(req.body)
        } else {
          resContent.error = true
          resContent.message = 'Please provide your last name!'
        }
      } else {
        resContent.error = true
        resContent.message = 'Please provide your first name!'
      }
    } catch (err) {
      resContent.error = true
      resContent.message = err.message
    }

    res.send(resContent)
  })
  .patch('/people/:id', (req, res) => {
    const resContent = {
      error: false,
      message: 'The product is successfully updated',
      items: people
    }

    try {
      const person = findPerson(req.params.id)

      if (person) {
        if (req.body.name) person.name = req.body.name
        if (req.body.lastname) person.lastname = req.body.lastname
      } else {
        resContent.error = true
        resContent.message = 'We couldn\'t find a person with the specified id'
      }
    } catch (err) {
      resContent.error = true
      resContent.message = err.message
    }

    res.send(resContent)
  })
  .delete('/people/:id', (req, res) => {
    const resContent = {
      error: false,
      message: 'The machine is no more',
      items: people
    }

    try {
      people = people.filter(person => person.id != req.params.id)
      resContent.items = people
    } catch (err) {
      resContent.error = true
      resContent.message = err.message
    }

    res.send(resContent)
  })

module.exports = router
