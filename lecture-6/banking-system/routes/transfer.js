var express = require('express')
var router = express.Router()
const transfersController = require('../controllers/transfers-controller')

router
  .get('/', transfersController.get_make_transfer_page)
  .post('/', transfersController.post_transfer)

module.exports = router
