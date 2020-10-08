var express = require('express')
var router = express.Router()
const customersController = require('../controllers/customers-controller')

router
      .get('/', customersController.get_customers)
      .get('/create', customersController.get_customers_create)
      .get('/:id', customersController.get_customer_update)
      .post('/', customersController.create_customer)
      .post('/:id', customersController.update_customer)
      .delete('/', customersController.delete)

module.exports = router
