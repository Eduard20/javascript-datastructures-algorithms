const LinkedListNode = require('./LinkedListNode');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;

    return this;
  }

  prepend(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head.next;
    this.head = node;

    return this;
  }

  search(key) {
    let current = this.head;
    if (current.value === key) {
      return current;
    }

    while (current.next) {
      if (current.next.value === key) {
        return current.next;
      }
      current = current.next;
    }

    return null;
  }

  remove(key) {
    let current = this.head;
    if (current.value === key) {
      if (current.next) {
        this.head = current.next;
        return this;
      }
      this.head = null;
      return this;
    }
    while (current.next) {
      if (current.next.value === key) {
        current.next = current.next.next;
        return this;
      }
      current = current.next;
    }

    return null;
  }

  reverse() {
    if (!this.head) return this.head;
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }
}

module.exports = LinkedList;
