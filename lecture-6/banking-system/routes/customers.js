var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('customers', { title: 'Customers' })
})

module.exports = router
