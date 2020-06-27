/* linked list using type script */

interface NodeAbstract {
  isEmpty(): boolean;
  size(): number;
  append(element: any): void;
  prepend(element: any): void;
  remove(element: any): void;
}

class aNode {
  private element: any;
  private nextNode: aNode;

  constructor(element: any) {
    this.element = element;
    this.nextNode = null;
  }

  public getNextNode = (): aNode => {
    return this.nextNode;
  };

  public setNextNode = (aNodeValue: aNode): void => {
    this.nextNode = aNodeValue;
  };

  public setElement = (element: any): void => {
    this.element = element;
  };

  public getElement = (): any => {
    return this.element;
  };
}

class LinkedList implements NodeAbstract {
  private head: aNode;
  private length: number;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  //check the linked list empty or not
  isEmpty(): boolean {
    return this.length === 0;
  }

  //get the size of the linked list
  size(): number {
    return this.length;
  }

  //add item to the end of the linked list
  append(element: any): void {
    let node = new aNode(element);
    if (this.length === 0) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.getNextNode !== null) {
        currentNode = currentNode.getNextNode();
      }
      currentNode.setNextNode(node);
    }
    this.length = this.length + 1;
  }

  //add item to the front of the linked list
  prepend(element: any): void {
    let node = new aNode(element);
    if (this.length === 0) {
      this.head = node;
    } else {
      node.setNextNode(this.head);
      this.head = node;
    }
    this.length = this.length + 1;
  }

  //remove an item 
  remove(element: any): void {
    let currentNode = this.head;
    let previousNode: aNode;

    if (this.length === 1) {
      this.head.setNextNode(null);
      this.head = null;
      this.length = this.length - 1;
      return;
    } else {
      while (currentNode.getNextNode() !== null) {
        if (currentNode.getElement() === element) {
          if (currentNode == this.head) {
            this.head = currentNode.getNextNode();
            this.length = this.length - 1;
          } else {
            previousNode.setNextNode(currentNode.getNextNode());
            this.length = this.length - 1;
          }
        }

        currentNode = currentNode.getNextNode();
        previousNode = currentNode;
      }
    }
  }
}

class Main {
  public static main = (): void => {
    let list = new LinkedList(); //create new linke list
    list.append([1, 2, 4]); //add item to front
    list.prepend([12, 22, 42]); //add item to end

    console.log(list.size());
    console.log(list.isEmpty());
  };
}

//do not edit after this line
Main.main();
