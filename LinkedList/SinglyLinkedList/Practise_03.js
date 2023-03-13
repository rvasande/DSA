class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    var node = new Node(data);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  traversing() {
    var counter = 1;
    var currentNode = this.head;
    while (counter < this.size) {
      currentNode = currentNode.next;
      counter++;
      console.log(currentNode);
    }
  }
  deleteNode(index) {
    var counter = 1;
    var lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      lead.next = lead.next.next;
    }
  }

  insertNode(index, data) {
    var node = new Node(data);
    var cuu, prev;
    if (index < 0 || index > this.size) {
      console.log("invalid");
    } else {
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      }
    }
  }
}
var ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
//   ll.traversing();
//   ll.deleteNode(0);
ll.insertNode(0,1111);
console.log(ll);