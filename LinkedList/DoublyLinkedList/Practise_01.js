class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    let node = new Node(data);

    if (this.head == null && this.tail == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  insertNode(index, data) {
    let node = new Node(data);
    let counter = 0;
    let temp, curr;
    curr = this.head
    while (counter < index) {
      temp = curr;
      curr = curr.next;
      counter++
    }
    temp.next = node;
    node.next = curr;
    node.prev = temp;
    curr.prev = node;

    this.size++;
  }

  print() {
    let curr = this.head;
    let array = [];

    while (curr) {
      array.push(curr.data);
      curr = curr.next;
    }
    console.log(array);
  }
}

let dll = new DoublyLinkedList();
dll.add(10);
dll.add(20);
dll.add(30);
dll.add(40);
dll.add(50);
dll.add(60);
dll.insertNode(2, 22);
dll.print();
//   console.log(dll);