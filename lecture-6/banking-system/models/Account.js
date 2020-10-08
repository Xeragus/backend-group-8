const mongoose = require('mongoose')

const schema = mongoose.Schema({ 
  currency: 'string',
  note: 'string',
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'Customer'
  }
})

module.exports = mongoose.model('Account', schema)