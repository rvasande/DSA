class Node{
  constructor(data){
      this.data = data
      this.next = null
  }
}

class Stack{
  constructor() {
      this.top = null
  }

  push(data){
     let node = new Node(data)
     node.next = this.top
     this.top = node
  }

  pop(){
      if(this.top == null){
    console.log("stack is empty");
      }else{
          this.top = this.top.next
      }
  }

  display(){
      let p = this.top
     if(this.top == null){
    console.log("stack is empty");
     }else{
      while(p != null){
        console.log(p.data);
        p = p.next
      }
     }
  }
}
let newstack = new Stack()
newstack.push(10)
newstack.push(20)
newstack.push(30)
newstack.push(40)
newstack.pop()
newstack.display()