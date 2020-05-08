const { Deque } = require ('./deque.js');

function palindromeChecker(text) {
  const deque = new Deque();
  if(!text){
    return false 
  }
  text=text.toLowerCase();
  text.replace(/\s/g, '').split("").map((item) => {
    deque.addFront(item);
  })
  while(deque.size() > 1){
    if(deque.removeFront() != deque.removeBack() ){
      return false;
    }
  }
  return true;
}

module.exports = { palindromeChecker };