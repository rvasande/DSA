class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedlist {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data){
  let node = new Node(data);
  if (this.head == null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.size++
}
insertnode(index,data)
{
let node = new Node(data)
if (index == 0)
{
node.next = this.head
this.head = node
}
else{

}



}

print(){
let current = this.head
let array = []
while (current){
  array.push(current.data)
  current = current.next

}
console.log(array);
}
}

let ll = new linkedlist
ll.add(10)
ll.add(20)
ll.add(30)
ll.insertnode(0,50)
ll.print()
console.log(ll);