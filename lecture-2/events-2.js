let events = require('events')
let util = require('util')

let Person = function(name) {
  this.name = name
}

util.inherits(Person, events.EventEmitter)

let person1 = new Person('Boban')
let person2 = new Person('Darko')
let person3 = new Person('Natasa')
const people = [person1, person2, person3]

people.forEach(person => {
  person.on('speak', (message) => {
    console.log(`${person.name} rece deka "${message}"`)
  })
})

person1.emit('speak', 'Yellow, my name is Boban and Homer Simpsons is my spirit animal')
person2.emit('speak', 'Jas sum Darko')
person3.emit('speak', 'Jas sum Natasa')