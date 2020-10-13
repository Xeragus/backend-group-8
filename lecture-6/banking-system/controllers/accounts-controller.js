const Customer = require('../models/Customer')
const mongoose = require('mongoose')
const Account = require('../models/Account')

String.prototype.insert = function(index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }

  return string + this;
}

module.exports = {
  get_account: async (req, res) => {
    const account = await Account.findById(req.params.id).populate('customer').populate('transactions')
    let balance = 0

    account.transactions.forEach(transaction => {
      if (transaction.from_account == account._id.toString()) {
        balance -= transaction.amount
      } else {
        balance += transaction.amount
      }
    })

    let balanceString = balance.toString()

    if (balance < 0) {
      balanceString = balanceString.insert(1, "$");
    } else {
      balanceString = balanceString.insert(0, "$");
    }

    res.render('account-details', { title: 'Account Details', account: account, balance: balanceString })
  },
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