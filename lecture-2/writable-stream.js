const fs = require('fs')
const writableStream = fs.createWriteStream('./output.txt')

writableStream.write('Boban e predavac, a vie ste zakon')