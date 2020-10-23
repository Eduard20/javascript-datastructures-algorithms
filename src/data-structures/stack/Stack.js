class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  getTop() {
    return this.items.length ? this.top : null;
  }

  isEmpty() {
    return !this.items.length;
  }

  size() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length) {
      if (this.items.length === 1) {
        this.top = null;
        return this.items.pop();
      }
      this.top = this.items[this.items.length - 2];
      return this.items.pop();
    }
    return null;
  }
}

module.exports = Stack;
