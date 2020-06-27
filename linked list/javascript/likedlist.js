/* linked list using java script */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LiskedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //get the size of the linked list
  size = () => this.length;

  //check the linked list empty or not
  isEmpty = () => this.length === 0;

  //add item to the end of the linked list
  append = (element) => {
    let node = new Node(element);
    if (this.length === 0) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length = this.length + 1;
  };

  //add item to the front of the linked list
  prepend = (element) => {
    let node = new Node(element);
    if (this.length === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length = this.length + 1;
  };

  //remove an item 
  remove = (element) => {
    let currentNode = this.head;
    let previousNode;

    if (this.length === 1) {
      this.head.next = null;
      this.head = null;
      this.length = this.length - 1;
      return;
    } else {
      while (currentNode.next !== null) {
        if (currentNode.element === element) {
          if (currentNode == this.head) {
            this.head = currentNode.next;
            this.length = this.length - 1;
          } else {
            previousNode.next = currentNode.next;
            this.length = this.length - 1;
          }
        }

        currentNode = currentNode.next;
        previousNode = currentNode;
      }
    }
  };

  
}

class Main {
  static main = () => {
    let list = new LiskedList();//create new linke list
    list.append([1, 2, 4]);//add item to front
    list.prepend([12, 22, 42]);//add item to end

    console.log(list.size());
    console.log(list.isEmpty());
  };
}

//do not edit after this line
Main.main();
