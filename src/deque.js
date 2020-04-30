class Deque {

  constructor() {
    this.count = 0;
    this.topCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      return this.addBack(element);
    } else if (this.topCount > 0) {
      this.topCount--;
      this.items[this.topCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.topCount = 0;
      this.items[0] = element;
    }
  }


  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const rta = this.items[this.topCount];
    delete this.items[this.topCount];
    this.topCount++;
    return rta;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  size() {
    return this.count - this.topCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.topCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.topCount = 0;
    this.items = {};
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

  getItems() {
    return this.items;
  }

}

module.exports = { Deque };