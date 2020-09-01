var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('transactions', { title: 'Skopje', name: 'Boban', lastname: 'Sugareski' })
})

module.exports = router
