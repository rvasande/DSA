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
    var node = new Node(data);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  tarversing() {
    var current = this.head;
    var counter = 0;
    while (counter < this.size) {
      current = current.next;
      console.log(current);
      counter++;
    }
  }

  insertNode(index , data){
var node = new Node(data)
var curr , prev
if(index < 0 || index > this.size){
  console.log("enter valid index");
}else{
  curr = this.head
  if(index === 0){
    node.next = this.head
    this.head = node
  }else{
   var counter = 0
   while(counter < index ){
      prev = curr
      curr = curr.next
      counter++
   }
   prev.next = node
   node.next = curr
  }
  this.size++
}
}

insertLast(){
var curr = this.head
var counter = 0
}

  deleteNode(index) {
    var lead = this.head;
    var counter = 0;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++
      }
      lead.next = lead.next.next
      // console.log(lead);
    }
    this.size++
  }

  print() {
    var current = this.head;
    var array = [];
    while (current != null) {
      array.push(current.data);
      current = current.next;
    }
    console.log(array);
  }
}
var ll = new Linkedlist();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);
//   ll.deleteNode();
ll.insertNode(4,111)
ll.print();
console.log(ll);
// ll.tarversing()