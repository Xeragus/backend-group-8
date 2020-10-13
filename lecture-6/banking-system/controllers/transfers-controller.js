const makeTransactionIDString = require('../services/random-string-generator')
const mongoose = require('mongoose')
const Transaction = require('../models/Transaction')
const Account = require('../models/Account')

module.exports = {
  get_make_transfer_page: (req, res) => {
    res.render('make-transfer', { title: 'Transfer', error: false, messages: [] })
  },
  post_transfer: async (req, res) => {
    try {
      const transaction = new Transaction(req.body)
      const fromAccount = await Account.findById(req.body.from_account)
      const toAccount = await Account.findById(req.body.to_account)

      transaction.transaction_number = makeTransactionIDString(32)
      await transaction.save()

      transaction.from_account = fromAccount
      transaction.to_account = toAccount
      await transaction.save()

      fromAccount.transactions.push(transaction)
      toAccount.transactions.push(transaction)
      await fromAccount.save()
      await toAccount.save()
    } catch (err) {
      res.send({
        error: true,
        messages: ['Invalid from account or to account']
      })
    }

    res.redirect('/')
  }
}