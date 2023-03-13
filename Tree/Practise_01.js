class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
  
// non recursive functin for inserting data in tree 
  makeTree(data) {
    let node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      let temp = this.root;
      while (temp != null) {
        if (data < temp.data) {
          if (temp.left == null) {
            temp.left = node;
            break
          } else {
            temp = temp.left;
          }
        } else {
          if (data > temp.data) {
            if (temp.right === null) {
              temp.right = node;
              break
            } else {
              temp = temp.right;
            }
          }
        }
      }
    }
  }
}

let bst = new BSTree();
bst.makeTree(30);
bst.makeTree(15)
bst.makeTree(40)
bst.makeTree(20)
bst.makeTree(33)
console.log(bst);
console.log(bst.isEmpty());