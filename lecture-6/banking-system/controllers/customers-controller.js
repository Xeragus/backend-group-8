const Customer = require('../models/Customer')
const mongoose = require('mongoose')

module.exports = {
  get_customers: async (req, res) => {
    const customers = await Customer.find()

    res.render('customers', { title: 'Customers', customers: customers })
  },
  get_customers_create: (req, res) => {
    const resContent = {
      error: false,
      messages: [],
      title: 'Customer Registration',
      customer: {}
    }

    res.render('customer-register', resContent)
  },
  create_customer: async (req, res) => {
    const resContent = {
      error: false,
      messages: [],
      title: 'Customer Registration'
    }

    const customerData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      id_number: req.body.id_number,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      note: req.body.note,
      dob: req.body.dob
    }

    try {
      const customer = new Customer({
        _id: new mongoose.Types.ObjectId(),
        ...customerData
      })

      await customer.save()
    } catch (err) {
      resContent.error = true
      resContent.messages = [err.message]
      resContent.customer = customerData
    }

    if (resContent.error) {
      res.render('customer-register', resContent)
      return
    }

    const customers = await Customer.find()
    
    res.redirect('/customers')
  }
}