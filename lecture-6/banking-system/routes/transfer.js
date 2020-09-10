var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('make-transfer', { title: 'Transfer' })
})

module.exports = router
