const { Deque } = require ('./deque.js');

function palindromeChecker(text) {

  if(!text || text === ''){
    return false;
  }

  let deque = new Deque();
  let lowerText = text.toLowerCase();
  let toRigthText;
  let toLeftText = {};

  for(let i = 0; i < lowerText.length; i++){
    if(text[i] != ' '){
      deque.addBack(lowerText[i]);
    }
  }
  deque.topCount = deque.count-1;
  toRigthText = deque.getItems();  

  for(let i = 0; i <= deque.topCount; i++){
    toLeftText[i] = toRigthText[deque.topCount-i];
  }

  for(let i = 0; i <= deque.topCount; i++){
    if(toRigthText[i] !== toLeftText[i]){
      return false;
    }
  }
  return true;
}

module.exports = { palindromeChecker };
