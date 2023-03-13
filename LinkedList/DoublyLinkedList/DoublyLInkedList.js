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

  insertAt(index, data) {
    let node = new Node(data);
    let temp, curr;
    curr = this.head;
    let counter = 0;
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
    }
    this.size++;
  }

  delete(index) {
  if(this.head != null){
      let lead = this.head;
    let counter = 0
    if(index === 0){
    this.head = this.head.next
    this.head.prev = null
    }else{
      while(counter < index -1){
       lead = lead.next
       counter++
       console.log(lead);
      }
      lead.next = lead.next.next
      lead.next.prev = lead
    }
  }
  }

  print() {
    let array = [];
    let current = this.head;
    while (current != null) {
      array.push(current.data);
      current = current.next;
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
dll.insertAt(2, 222);
dll.delete()
dll.print();
console.log(dll);