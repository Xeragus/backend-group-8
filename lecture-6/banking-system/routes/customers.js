var express = require('express')
var router = express.Router()
const Customer = require('../models/Customer')
const mongoose = require('mongoose')

router
      .get('/', (req, res) => {
        res.render('customers', { title: 'Customers' })
      })
      .get('/create', (req, res) => {
        res.render('customer-register', { title: 'Customer Registration' })
      })
      .post('/', async (req, res) => {
        try {
          const customer = new Customer({
            _id: new mongoose.Types.ObjectId(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            id_number: req.body.id_number,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            note: req.body.note
          })

          await customer.save()
        } catch (err) {
          console.log(err)
        }

        const customers = await Customer.find()
        console.log(customers)

      })

module.exports = router
