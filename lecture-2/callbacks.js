const printOutSomething = (something) => {
  console.log(something)
}

const printThisFirst = (printThisWord, callback) => {
  console.log(printThisWord)
  callback('word 2')
}

printThisFirst('word', printOutSomething)