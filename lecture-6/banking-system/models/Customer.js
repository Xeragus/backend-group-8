const mongoose = require('mongoose')

const schema = mongoose.Schema({
  first_name: {
    type: String,
    required: ['First Name is a required field']
  },
  last_name: {
    type: String,
    required: ['Last Name is a required field']
  },
  id_number: {
    type: String,
    required: ['ID Number is a required field'],
    unique: true,
    validate: {
      validator: function(v) {
        return /[A-Z]{1}[0-9]{7}/
      },
      message: props => `${props.value} is not a valid ID number!`
    }
  },
  address: {
    type: String,
    required: ['Address is a required field']
  },
  email: {
    type: String,
    required: ['Email is a required field'],
    validate: {
      validator: function(v) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  phone: {
    type: String,
    required: ['Phone is a required field'],
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{3}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
  },
  dob: {
    type: String,
    required: ['Date of Birth is a required field'],
    validate: {
      validator: function(v) {
        return /\d{2}\/\d{2}\/\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid date of birth!`
    },
  },
  note: {
    type: String
  },
  accounts: [{
    type: mongoose.Types.ObjectId,
    ref: 'Account'
  }]
})

module.exports = mongoose.model('Customer', schema)