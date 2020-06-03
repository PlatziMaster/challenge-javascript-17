const { Deque } = require('./deque.js');

function palindromeChecker(text) {

  if (!text) {
    return false
  }

  let textLower = text.toLowerCase().split(' ')
  let listLetters = textLower.join('').split('')

  phrase = new Deque()
  phraseReverse = new Deque()

  listLetters.forEach(letter => {
    phrase.addFront(letter)
    phraseReverse.addBack(letter)
  });

  return phrase.toString() === phraseReverse.toString()
}

module.exports = { palindromeChecker };