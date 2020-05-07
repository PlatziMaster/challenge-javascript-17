function palindromeChecker(text) {
  if (!text) {
    return false
  }

  var re = /[^A-Za-z0-9]/g;
  text = text.toLowerCase().replace(re, '')
  const invText = text.split('').reverse().join('')

  return text === invText
}

module.exports = { palindromeChecker };