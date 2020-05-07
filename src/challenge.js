const { Deque } = require ('./deque.js');

function palindromeChecker(text) {
  if (!text) {
    return false
  }

  const re = /[^A-Za-z0-9]/g;
  text = text.toLowerCase().replace(re, '')

  let Deq = new Deque()
  for (var i = 0; i < text.length; i++)
  {
    Deq.addFront(text.charAt(i))
  }

  for(var i = 1; i <= Deq.size(); i++) {
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