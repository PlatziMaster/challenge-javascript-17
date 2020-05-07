const { Queue } = require ('./queue.js');

function hotPotato(elements, turns) {
  const queue = new Queue();
  const removed = [];

  for (let index = 0; index < elements.length; index++) {
    queue.enqueue(elements[index]);
  }

  while(queue.size() > 1) {
    for (let index = 0; index < turns; index++) {
      queue.enqueue(queue.dequeue());
    }
    removed.push(queue.dequeue());
  }

  return {
    winner: queue.dequeue(),
    removed
  }
}

const players = ['Nicolas', 'Zule', 'Santiago', 'Valentina', 'Cristian', 'asa'];
const rta = hotPotato(players, 2);

console.log(rta);