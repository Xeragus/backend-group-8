var express = require('express')
var router = express.Router()

router.get('/23423423', (req, res) => {
  res.render('account', {
    title: 'Account',
    id: '4343433434',
    issued_on: '04/05/2019',
    customer: {
      name: "Boban Sugareski",
      address: "Prvomajska bb",
      phone: "+389 74539823"
    },
    balance: 99.56
  })
})

module.exports = router
