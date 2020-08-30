class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BST {
  constructor() {
    this.head = null;
  }

  isEmpty = () => {
    return this.head === null;
  };

  insert = (data) => {
    if (this.isEmpty()) {
      this.head = new Node(data);
      return;
    } else {
      insertInner(this.head);
    }

    function insertInner(node) {
      if (data < node.data) {
        if (node.leftNode === null) {
          node.leftNode = new Node(data);
          return;
        }
        return insertInner(node.leftNode);
      }
      if (node.rightNode === null) {
        node.rightNode = new Node(data);
        return;
      }
      return insertInner(node.rightNode);
    }
  };

  inOrder = (node = this.head) => {
    if (node === null) return;
    this.inOrder(node.leftNode);
    console.log(node.data);
    this.inOrder(node.rightNode);
  };

  postOrder = (node = this.head) => {
    if (node === null) return;
    this.inOrder(node.leftNode);
    this.inOrder(node.rightNode);
    console.log(node.data);
  }

  preOrder = (node = this.head) => {
    if (node === null) return;
    console.log(node.data);
    this.inOrder(node.leftNode);
    this.inOrder(node.rightNode);
  }
}

class Main {
  static main = () => {
    let bst1 = new BST();
    bst1.insert(12);
    bst1.insert(10);
    bst1.insert(5);
    bst1.insert(8);
    bst1.insert(11);
    bst1.insert(14);
    bst1.insert(7);
    bst1.insert(33);
    bst1.insert(11);
  
  };
}

Main.main();
