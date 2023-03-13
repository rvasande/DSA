class Node {
  constructor(data) {
    this.data = data;
    this.left = null
    this.right = null;
  }
}


class BSTree{
  constructor() {
    this.root=null
  }
  
  isEmpty(){
    return this.root===null
  }

  makeTree(data){
      let node = new Node(data)
      if(this.root === null){
         this.root = node
      }else{
        let temp = this.root
        while(temp != null){
          if(data < temp.data){
            if(temp.left===null){
             temp.left=node
             break
            }else{
              temp = temp.left
            }
          }else{
            if(data > temp.data){
              if(temp.right === null){
                  temp.right = node
                  break
              }else{
                temp = temp.right
              }
            }
          }
        }
      }
  }
}

let bst = new BSTree()
bst.makeTree(10)
bst.makeTree(5)
bst.makeTree(15)
bst.makeTree(66)
bst.makeTree(1)
console.log(bst);