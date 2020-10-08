var express = require('express')
const accountsController = require('../controllers/accounts-controller')
var router = express.Router()

router
      .post('/', accountsController.create_account)

module.exports = router
