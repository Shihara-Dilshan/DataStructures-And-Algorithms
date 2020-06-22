/* implementing stacks using javascript */

class Stack {
  //initialize ES6 constructor
  constructor() {
    this.count = 0; //To count the current number of items in the stack
    this.storage = {}; //An empty object to store a stack
  }

  //Add an value to the stack(to end of the stack)
  push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  //Remove the last element from the stack and return the removed value
  pop = () => {
    //if the stack is empty return undefined
    if (this.count === 0) {
      return undefined;
    } else {
      this.count--; //resuce the size of the stack by 1
      let popValue = this.storage[this.count]; //extract the last value from the stack to a variable
      delete this.storage[this.count]; //remove the value from the stack
      return popValue; //return the removed value
    }
  };

  //Get the size of the stack
  size = () => {
    return this.count;
  };

  //Get the last element of the stack(but not remove the value)
  peek = () => {
    return this.storage[this.count - 1];
  };

  //check the stack is empty or not
  isEmpty = () => {
    if (this.count == 0) {
      return true;
    } else {
      return false;
    }
  };
}

class RegularChecker {
  constructor(expression) {
    this.expression = expression;
    this.stack1 = new Stack(); //create a new stack
  }

  checker() {
    if (this.expression.length % 2 === 1) { //if the expression has odd number of charactors
      return false;                         
    }

    for (let bracket of this.expression.split("")) {//put each bracket from the expression to a array and itarate 
      if (bracket === "(" || bracket === "{" || bracket === "[") {
        this.stack1.push(bracket);//put opening brackets to the stack
      }

      if (bracket === ")" || bracket === "}" || bracket === "]") {

        if(this.stack1.isEmpty()){//stack cannot be empty at this point
          return false;
        }

        let lastElement = this.stack1.pop();//when a closing bracket is found pop the last element from the stack

        if (
          (bracket === "(" && lastElement !== ")") || //check the balanced status
          (bracket === "[" && lastElement !== "]") ||
          (bracket === "{" && lastElement !== "}")
        ) {
            return false;
        }
      }
    }
    return this.stack1.isEmpty(); // after itarate the stack must be empty
  }
}

class Main {
  static main() {
    let RegularChecke = new RegularChecker("{{}(){}[]}");
    console.log(RegularChecke.checker());
  }
}

//do not edit this line
Main.main();
