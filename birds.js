const arr = [1, 2, 1, 3, 4, 4, 5, 4, 3, 3]
const birds = []

arr.forEach(birdId => {
    const foundBird = birds.find(bird => {
        return bird.birdId == birdId
    })

    if (foundBird) foundBird.numberOfOccurences += 1
    else {
        birds.push({
          birdId: birdId,
          numberOfOccurences: 1
        })
    }
})

let maxOccurences = 0
birds.forEach(bird => {
    if (bird.numberOfOccurences > maxOccurences) maxOccurences = bird.numberOfOccurences
})

const mostFrequentlyFoundBirdIds = []
birds.forEach(bird => {
    if (bird.numberOfOccurences == maxOccurences) mostFrequentlyFoundBirdIds.push(bird.birdId)
})

let minBirdId = 2 * 100000 + 1
mostFrequentlyFoundBirdIds.forEach(birdId => {
    if (birdId < minBirdId) minBirdId = birdId
})

console.log(minBirdId)