const mongoose = require('mongoose')
const Customer = require('../models/Customer')
const faker = require('faker')
const moment = require('moment')

const randomCapitalLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26))
const customers = []

mongoose.connect(
  'mongodb+srv://bobz:87-pr-12@lavovigroup.ngbhd.mongodb.net/banking_system_cloud?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)


for(let i = 0; i < 10; i++) {
  customers.push({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    dob: moment(faker.date.between('1960-01-01', '2001-01-05')).format('DD/MM/YYYY'),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('###-###-###'),
    id_number: `${randomCapitalLetter()}${faker.random.number({min: '1000000', max: '9999999'})}`
  })
}

Customer.insertMany(customers)
        .then(res => {
          console.log(res)
          console.log('Customer seeder successfully completed its job!')
        })
        .catch(err => {
          console.log(err)
        })
