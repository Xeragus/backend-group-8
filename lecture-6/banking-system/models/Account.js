const mongoose = require('mongoose')

const schema = mongoose.Schema({ 
  currency: 'string',
  note: 'string',
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'Customer'
  },
  transactions: [{
    type: mongoose.Types.ObjectId,
    ref: 'Transaction'
  }]
})

module.exports = mongoose.model('Account', schema)