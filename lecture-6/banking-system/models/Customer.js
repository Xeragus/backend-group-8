const mongoose = require('mongoose')

const schema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  id_number: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{3}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
  },
  // dob: {
  //   type: String,
  //   required: true,
  //   validate: {
  //     validator: function(v) {
  //       return /\d{2}\/\d{2}\/\d{4}/.test(v);
  //     },
  //     message: props => `${props.value} is not a valid phone number!`
  //   },
  // },
  note: {
    type: String
  }
})

module.exports = mongoose.model('Customer', schema)