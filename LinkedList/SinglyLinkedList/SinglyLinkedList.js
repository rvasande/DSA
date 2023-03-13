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
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(index , data){
      let node = new Node(data)
      let prev ,curr
      if(index == 0){
          node.next = this.head
          this.head = node

      }else{
         let counter  = 0
         let curr = this.head
         while(counter < index){
          prev = curr
          curr = curr.next
          counter++
         }
         prev.next = node
         node.next = curr
      }
  }

  delete(index){
      if(this.head != null){
         let counter = 0
         let lead = this.head
         while(counter < index -1){
           lead = lead.next
         }
         lead.next = lead.next.next
      }
  }

  print(){
      let array = []
      let current = this.head
      while(current != null){
      array.push(current.data)
      current = current.next
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
console.log(ll);
ll.insertAt(3 , 11)
ll.insertAt(4,43)
ll.delete(1)
ll.print()