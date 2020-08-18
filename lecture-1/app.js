// data types
// 1. string
let name = 'Boban Sugareski'
// console.log(typeof name)
// 2. number
let titlesWon = 14
// console.log(typeof titlesWon)
// 3. boolean
let isArsenalTheBestClubInTheWorld = true
// console.log(typeof isArsenalTheBestClubInTheWorld)
// 4. object
let person = { name: 'Boban', lastname: 'Sugareski' }
// console.log(typeof person)
// 5. array
// deklariranje na promenliva: let persons
// inicijaliziranje na promenliva: = ['boban', '..']
let persons = ['boban', 'sugareski']
// console.log(typeof persons)
// 6. undefined
let table
// console.log(typeof table)
// 7. NULL
// console.log(typeof NULL)


// banking system
const mathOperations = require('./maths')

let commission = 9
let amount = 250
let rate = 4.5

console.log(mathOperations.calculateExpression(commission, amount, rate))

