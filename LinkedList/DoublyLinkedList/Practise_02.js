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
    let temp, curr;
    let counter = 0;
    curr = this.head;

    if (index === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      while (counter < index) {
        temp = curr;
        curr = curr.next;
        counter++;
      }
      temp.next = node;
      node.next = curr;
      node.prev = temp;
      curr.prev = node;

      this.size++;
    }
  }

  deleteNode(index) {
    let lead = this.head;
    let counter = 0;
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      lead.next = lead.next.next;
      lead.next.prev = lead;

    }
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
  dll.deleteNode(3)
//   dll.insertNode(0,54545)
//   dll.insertNode(0,54545)
//   dll.insertNode(0,55)
dll.print();
  console.log(dll);