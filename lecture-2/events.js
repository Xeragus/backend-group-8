let events = require('events')
let emitter = new events.EventEmitter()

emitter.on('viknaLeona', (message) => {
  console.log(message)
})

emitter.on('commissionApplied', (message) => {
  // kod koj isprakja mail do korisnikot
  // kod koj zapisuva vo baza deka se presmetala provizija za nekoja suma
  // se kreira transakcija ....
})

emitter.emit('viknaLeona', 'Arsenal e najdobar klub vo svetot')
emitter.emit('viknaLeona', 'Da toa e tocno')
emitter.emit('commissionApplied', '20943043')