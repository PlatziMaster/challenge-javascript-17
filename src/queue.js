class Queue {

  constructor() {
    this.count = 0;
    this.topCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const rta = this.items[this.topCount];
    delete this.items[this.topCount];
    this.topCount++;
    return rta;
  }

  size() {
    return this.count - this.topCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getItems() {
    return this.items;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.topCount];
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let result = '';
    for (let index = this.topCount; index < this.count; index++) {
      result+= `${this.items[index]},`;
    }
    return result;
  }

  clear() {
    this.count = 0;
    this.topCount = 0;
    this.items = {};
  }

}

module.exports = { Queue };