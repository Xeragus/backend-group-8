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

    try {
      const customer = new Customer({
        _id: new mongoose.Types.ObjectId(),
        ...req.body
      })

      await customer.save()
    } catch (err) {
      resContent.error = true
      resContent.messages = [err.message]
      resContent.customer = req.body
    }

    // if (resContent.error) {
    //   res.render('customer-register', resContent)
    //   return
    // }

    res.redirect('/customers')
  },
  update_customer: async (req, res) => {
    await Customer.updateOne({ _id: req.params.id }, req.body)

    res.redirect(`/customers/${req.params.id}`)
  },
  delete: async (req, res) => {
    const resContent = {
      error: false,
      messages: []
    }

    try {
      const customer = await Customer.findById(req.body.id)
      await Customer.remove({ _id: req.body.id })
      // interpolacija na string
      resContent.messages.push(`Customer ${customer.first_name} ${customer.last_name} is removed from the system.`)
    } catch(err) {
      resContent.error = true
      resContent.messages.push(err.message)
    }

    res.send(resContent)
  },
  get_customer_update: async (req, res) => {
    const customer = await Customer.findById(req.params.id).populate('accounts')

    res.render('customer-update', {
      customer: customer,
      title: 'Customer Update'
    })
  }
}