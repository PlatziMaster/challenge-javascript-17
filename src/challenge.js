'use strict'

const checker = (text) => () => {
  const textJoin = text.split(' ').join('')
  const reverseText = textJoin.split('').reverse().join('')
  if (textJoin === reverseText) {
    return true
  }
  return false
}

function palindromeChecker(text) {
  if (text === null || text === undefined || text === '') {
    return false
  }
  const result = checker(text.toLowerCase())
  return result()
}

module.exports = { palindromeChecker };