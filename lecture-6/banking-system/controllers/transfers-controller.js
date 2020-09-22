const makeTransactionIDString = require('../services/random-string-generator')
const mongoose = require('mongoose')
const Transaction = require('../models/Transaction')

module.exports = {
  get_make_transfer_page: (req, res) => {
    res.render('make-transfer', { title: 'Transfer' })
  },
  post_transfer: async (req, res) => {
    const transaction = new Transaction({
      _id: new mongoose.Types.ObjectId(),
      transaction_number: makeTransactionIDString(20),
      from_account_id: req.body.from_account,
      to_account_id: req.body.to_account,
      amount: req.body.amount,
      comment: req.body.comment
    })

    await transaction.save()

    res.redirect('/')
  }
}