class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let node = new Node(data);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertNode(index, data) {
    let node = new Node(data);
    let curr, prev;
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let counter = 0;
      curr = this.head;
      while (counter < index) {
        prev = curr;
        curr = curr.next;
        counter++;
      }
      prev.next = node;
      node.next = curr;
    }
    this.size++;
  }

  deleteNode(index) {
    if (index != null) {
      let curr = this.head;
      if (index < 0 || index > this.size) {
        console.log("invalid index");
      } else {
        if (index === 0) {
          this.head = this.head.next;
        } else {
          let counter = 0;
          let lead = this.head;
          while (counter < index - 1) {
            lead = lead.next;
            counter++;
          }
          lead.next = lead.next.next;
        }
      }
    }
  }

  print() {
    let curr = this.head;
    let array = [];
    while (curr != null) {
      array.push(curr.data);
      curr = curr.next;
    }
    console.log(array);
  }
}

let ll = new Linkedlist();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);
ll.deleteNode();
  // ll.insertNode();
ll.print();
  console.info(ll);
  alert(ll);