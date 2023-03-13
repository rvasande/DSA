class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  push(data) {
    let node = new Node(data);
    if (this.front == null) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  pop() {
    if (this.front == null) {
      console.log("queue is empty");
    } else {
      this.front = this.front.next;
    }
  }

  print() {
    let f = this.front;
    if (this.front == null) {
      console.log("queue is empty");
    } else {
      while (f != null) {
        console.log(f.data);
        f = f.next;
      }
    }
  }
}
let newQueue = new Queue();
newQueue.push(10);
newQueue.push(20);
newQueue.push(30);
newQueue.push(40);
newQueue.pop();
newQueue.print();