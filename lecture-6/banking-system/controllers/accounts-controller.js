const Customer = require('../models/Customer')
const mongoose = require('mongoose')
const Account = require('../models/Account')

module.exports = {
  create_account: async (req, res) => {
    const account = new Account(req.body)
    await account.save()
    account.customer = await Customer.findById(req.body.customer_id)
    await account.save()
    const customer = await Customer.findById(req.body.customer_id)
    customer.accounts.push(account)
    await customer.save()

    res.send(200, account)
  }
}