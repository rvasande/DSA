class stackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let node = new stackNode(data);
    node.next = this.top;
    this.top = node;
  }

  pop(){
      if(this.top == null){
     console.log("stack is empty");
      }else{
          this.top = this.top.next
      }
  }

  display() {
    if (this.top == null) {
      console.log("stack is empty , no element found in this stack");
    } else {
      let p = this.top;
      while(p != null){
          console.log(p.data);
          p=p.next
      }
    }
  }
}

let newNode = new stack();
newNode.push(10);
newNode.push(20);
newNode.push(30);
newNode.push(40);
newNode.push(50);
newNode.push(60);

newNode.display()