var express = require('express')
var router = express.Router()
const Transaction = require('../models/Transaction')

router.get('/', async (req, res) => {
  const transactions = await Transaction.find()

  res.render('transactions', { title: 'Bank', transactions: transactions })
})

module.exports = router
