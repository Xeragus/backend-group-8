try {
  throw new Error('Se sluci greska zatoa sto e zabavno da ima greski')
} catch (error) {
  console.log('Pa da se sluci greska tocno e i nejziniot tekst e ', error.message)
}