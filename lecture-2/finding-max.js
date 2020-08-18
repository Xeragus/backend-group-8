// Naogjanje na najgolem broj vo niza

const numbers = [1, 4, 10, 2, 8, 5, 11]
let max = numbers[0]

numbers.forEach(number => {
  if (number > max) {
    max = number
  }
})

console.log('Najgolem broj vo nizata e ', max)

// Naogjanje na index na element so najgolema vrednost vo niza
let maxIndex = 0
max = numbers[0]


for(let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]
    maxIndex = i
  }
}

console.log('Indeksot na najgolemiot element vo nizata e ', maxIndex)