const { Deque } = require ('./deque.js');

function palindromeChecker(text) {
  const deque = new Deque();
  if(!text){
    return false 
  }
  text=text.toLowerCase();
  text.replace(/\s/g, '').split("").forEach(element => {
    deque.addBack(element);
  })
  while(deque.size() > 1){
    if(deque.removeFront() != deque.removeBack() ){
      return false;
    }
  }
  return true;
}

module.exports = { palindromeChecker };