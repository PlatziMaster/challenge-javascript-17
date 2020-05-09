const { Deque } = require ('./deque.js');

function palindromeChecker(text) {
  if (!text) return false

  const re = /[^A-Za-z0-9]/g;
  text = text.toLowerCase().replace(re, '')

  let Deq = new Deque()
  for (let i = 0; i < text.length; i++) Deq.addBack(text.charAt(i))

  for(let i = 1; i <= Deq.size(); i++) {
    if (Deq.peekBack() !== Deq.peekFront()) {
      return false
    } else {
      Deq.removeBack()
      Deq.removeFront()
    }
  }

  return true;
}

module.exports = { palindromeChecker };