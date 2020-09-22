const mongoose = require('mongoose')

const schema = mongoose.Schema({ 
  transaction_number: 'string', 
  from_account_id: 'string',
  to_account_id: 'string',
  amount: 'number',
  comment: 'string'
})

module.exports = mongoose.model('Transaction', schema)