class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  makeTree(data) {
    let node = new Node(data);

    if (this.root === null) {
      this.root = node;
    } else {
      let temp = this.root;
      while (temp != null) {
        if (data < temp.data) {
          if (temp.left === null) {
            temp.left = node;
            break;
          } else {
            temp = temp.left;
          }
        } else {
          if (data > temp.data) {
            if (temp.right === null) {
              temp.right = node;
              break;
            } else {
              temp = temp.right;
            }
          }
        }
      }
    }
  }

  search(root, data) {
    if (root === null) {
      return false;
    } else if (root.data === data) {
      return true;
    } else if (root.data > data) {
      return this.search(root.left, data);
    } else {
      return this.search(root.right, data);
    }
  }
}

let bst = new Tree();
bst.makeTree(50);
bst.makeTree(30);
bst.makeTree(20);
bst.makeTree(5);
bst.makeTree(70);
console.log(bst.search(bst.root,5));
console.log(bst);