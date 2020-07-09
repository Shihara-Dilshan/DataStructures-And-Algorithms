class Stack {
  constructor() {
    this.stack = [];
  }

  push = (data) => {
    this.stack.push(data);
  };

  isEmpty = () => {
    return this.stack.length === 0;
  };

  pop = () => {
    if (!this.isEmpty()) {
      return this.stack.pop();
    } else {
      return null;
    }
  };

  peek = () => {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    } else {
      return null;
    }
  };

  print = () => {
    console.log(this.stack);
  };
}

class Sort {
  constructor(stackObj) {
    this.stackObj = stackObj;
    this.tempStack = new Stack();
    this.isPushed = false;
  }

  sort = () => {
    let temp = this.stackObj.pop();
    while (!this.stackObj.isEmpty()) {
      if (this.isPushed) {
        temp = this.stackObj.pop();
        this.isPushed = false;
      }

      if (this.tempStack.isEmpty()) {
        this.tempStack.push(temp);
        this.isPushed = true;
      } else if (this.tempStack.peek() <= temp) {
        this.tempStack.push(temp);
        this.isPushed = true;
      } else {
        this.stackObj.push(this.tempStack.pop());
      }
    }
  };

  printer = () => {
    this.tempStack.print();
  };
}

class Main {
  static main = () => {
    let stack1 = new Stack();
    stack1.push(3);
    stack1.push(123);
    stack1.push(32);
    stack1.push(322);
    stack1.push(113);
    stack1.push(193);
   

    let sort1 = new Sort(stack1);
    sort1.sort();
    sort1.printer();
  };
}

Main.main();
