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

  insertNode(data) {
    let newNode = new Node(data);

    if (this.front == null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
  }
    
  }

  delete() {
    if (this.front == null) {
      console.log("Queue is empty");
    } else {
      let temp = this.front;
      this.front = this.front.next;
    }
  }

  print() {
    if (this.front == null) {
      console.log("no element found in this queue");
    } else {
      let f = this.front;
      while (f != null) {
        console.log(f.data);
        f = f.next;
      }
    }
  }
}

let newQueue = new Queue();
newQueue.insertNode(10);
newQueue.insertNode(20);
newQueue.insertNode(30);
newQueue.insertNode(40);
newQueue.insertNode(50);
newQueue.delete();
newQueue.print();