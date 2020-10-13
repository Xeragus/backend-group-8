var express = require('express')
const Transaction = require('../models/Transaction')
var router = express.Router()

router
      .get('/:id', async (req, res) => {
        const transaction = await Transaction.findById(req.params.id)
        res.render('transaction', { title: 'Edit transaction', transaction: transaction })
      })
      .post('/')

module.exports = router
