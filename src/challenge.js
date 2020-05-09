const { Deque } = require('./deque.js');

/**
 * 
 * @param {string} text 
 * @returns {boolean}
 */
function palindromeChecker(text) {
  if (!text) return false;
  
  const dequeText = new Deque(
    text.replace(/ /g, '').toLowerCase()
  );

  while (!dequeText.isEmpty()) {
    if (dequeText.peekBack() !== dequeText.peekFront()) {
      return false;
    }
    dequeText.removeBack();
    dequeText.removeFront();
  }

  return true;
}

module.exports = { palindromeChecker };