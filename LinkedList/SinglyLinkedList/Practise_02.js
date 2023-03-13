class Node {
  constructor(data) {
    this.value = data;
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
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      // this.tail = node;
    }
    this.size++;
  }

  traversing() {
    var counter = 1;
    var currentNode = this.head;
    while (counter < this.size) {
        currentNode = currentNode.next;
        counter++
        console.log(currentNode);
    }
  }

  deleteNode(index){

  }
}
var ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.traversing()
console.log(ll);