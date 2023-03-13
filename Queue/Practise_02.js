class Node{
    constructor(data){
     this.data = data
     this.next = null

    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
    }

    push(data){
        let node = new Node(data)
      if(this.front == null){
       this.front = this.rear = node
      }else{
        this.rear.next = node
        this.rear = node
      }
    }

    pop(){
        if(this.front == null){
     console.log("queue is empty");
        }else{
            let temp = this.front
            this.front=this.front.next  
        }
    }


    print(){
        let temp = this.front
        if(temp == null){
          console.log("queue is empty ");
        }else{
            while(temp != null){
                console.log(temp.data);
               temp = temp.next
            }
        }
    }
}

let newQueue = new Queue()
newQueue.push(10)
newQueue.push(20)
newQueue.push(30)
newQueue.push(40)
newQueue.push(3440)
newQueue.push(304)
newQueue.push(330)
newQueue.pop()
newQueue.pop()
newQueue.pop()
newQueue.pop()
newQueue.pop()
newQueue.pop()
newQueue.pop()
newQueue.print()