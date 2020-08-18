const calculateExpression = (commission, amount, rate) => {
  return amount / commission + rate
}

const calculateExpression2 = (commission, amount, rate) => {
  return amount / commission + rate - 1
}

const calculateExpression3 = (commission, amount, rate) => {
  return amount / commission + rate + 1
}

module.exports = {
  calculateExpression: calculateExpression,
  calculateExpression2: calculateExpression2,
  calculateExpression3: calculateExpression3
}