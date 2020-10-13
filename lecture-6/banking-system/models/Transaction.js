const mongoose = require('mongoose')

const schema = mongoose.Schema({ 
  transaction_number: 'string', 
  from_account: {
    type: mongoose.Types.ObjectId,
    ref: 'Account'
  },
  to_account: {
    type: mongoose.Types.ObjectId,
    ref: 'Account'
  },
  amount: 'number',
  comment: 'string'
})

module.exports = mongoose.model('Transaction', schema)