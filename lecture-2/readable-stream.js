const fs = require('fs')
const readableStream = fs.createReadStream('./output.txt', 'utf-8')

readableStream.on('data', (chunk) => {
  console.log(chunk)
})