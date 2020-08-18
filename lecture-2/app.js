// Zadaca 1: Kako da go najdeme studentot koj ima najmnogu poeni

const students = [
  {
    id: 3443,
    name: "Marija",
    points: 12
  },
  {
    id: 32121,
    name: "Boban",
    points: 4
  },
  {
    id: 1245,
    name: "Darko",
    points: 15
  },
  {
    id: 6753,
    name: "Marko",
    points: 11
  }
]

let maxPoints = students[0].points
let maxIndex = 0

for(let i = 0; i < students.length; i++) {
  if (students[i].points > maxPoints) {
    maxPoints = students[i].points
    maxIndex = i
  }
}

console.log(students[maxIndex])
console.log('Studentot koj ima najgolem broj poeni se vika ' + students[maxIndex].name)
console.log(`Studentot koj ima najgolem broj poeni se vika ${students[maxIndex].name}`)