class NodeX {
  private data: number;
  private rightNode: NodeX;
  private leftNode: NodeX;

  constructor(data: number) {
    this.data = data;
    this.rightNode = this.leftNode = null;
  }

  public getData = (): Number => {
    return this.data;
  };

  public setData = (data: number): void => {
    this.data = data;
  };

  public getRightNode = (): NodeX => {
    return this.rightNode;
  };

  public setRightNode = (rightNode: NodeX): void => {
    this.rightNode = rightNode;
  };

  public getLeftNode = (): NodeX => {
    return this.leftNode;
  };

  public setLeftNode = (leftNode: NodeX): void => {
    this.leftNode = leftNode;
  };
}

class BST {
  private root: NodeX;

  constructor() {
    this.root = null;
  }

  public isEmpty = (): boolean => {
    return this.root === null;
  };

  //insert using while loop
  public insert = (data: number): void => {
    if (this.root === null) {
      this.root = new NodeX(data);
      return;
    } else {
      let current: NodeX = this.root;
      while (current !== null) {
        if (data < current.getData()) {
          if (current.getLeftNode() === null) {
            current.setLeftNode(new NodeX(data));
            break;
          } else {
            current = current.getLeftNode();
          }
        } else {
          if (current.getRightNode() === null) {
            current.setRightNode(new NodeX(data));
            break;
          } else {
            current = current.getRightNode();
          }
        }
      }
    }
  };

  public inOrder = (Node: NodeX = this.root): void => {
    if (Node === null) return;
    this.inOrder(Node.getLeftNode());
    console.log(Node.getData());
    this.inOrder(Node.getRightNode());
  };

  public preOrder = (Node: NodeX = this.root): void => {
    if (Node === null) return;
    console.log(Node.getData());
    this.inOrder(Node.getLeftNode());
    this.inOrder(Node.getRightNode());
  };

  public postOrder = (Node: NodeX = this.root): void => {
    if (Node === null) return;
    this.inOrder(Node.getLeftNode());
    this.inOrder(Node.getRightNode());
    console.log(Node.getData());
  };
}

class Main {
  public static main = (): void => {
    let bst: BST = new BST();
    bst.insert(5);
    bst.insert(3);
    bst.insert(4);
    bst.insert(6);
    bst.insert(7);
    bst.insert(9);
    bst.insert(12);
    bst.insert(10);

    bst.inOrder();
  };
}

Main.main();
