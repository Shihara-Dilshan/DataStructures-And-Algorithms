/* implementing stacks using typescript */

interface stacksAbstract {
  push(value: any): void;
  pop(): any;
  size(): number;
  peek(): any;
  isEmpty(): boolean;
}

class stacks implements stacksAbstract {
  private count: number;
  private storage: object;

  //initialize ES6 constructor
  constructor() {
    this.count = 0; //To count the current number of items in the stack
    this.storage = {}; //An empty object to store a stack
  }

  //Add an value to the stack(to end of the stack)
  public push = (value: any): void => {
    this.storage[this.count] = value;
    this.count++;
  };

  //Remove the last element from the stack and return the removed value
  public pop = (): any => {
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
  public size = (): number => {
    return this.count;
  };

  //Get the last element of the stack(but not remove the value)
  public peek = (): any => {
    return this.storage[this.count - 1];
  };

  //check the stack is empty or not
  public isEmpty = (): boolean => {
    if (this.count === 0) {
      return true;
    } else {
      return false;
    }
  };
}

class ExpressionChecker {
  private expression: string;
  private stack: stacks;

  constructor(expression: string) {
    this.expression = expression;
    this.stack = new stacks();
  }

  public checker(): boolean {
    if (this.expression.length % 2 === 1) { //if the expression has odd number of charactors
        return false;                         
      }
  
      for (let bracket of this.expression.split("")) {//put each bracket from the expression to a array and itarate 
        if (bracket === "(" || bracket === "{" || bracket === "[") {
          this.stack.push(bracket);//put opening brackets to the stack
        }
  
        if (bracket === ")" || bracket === "}" || bracket === "]") {
  
          if(this.stack.isEmpty()){//stack cannot be empty at this point
            return false;
          }
  
          let lastElement = this.stack.pop();//when a closing bracket is found pop the last element from the stack
  
          if (
            (bracket === ")" && lastElement !== "(") || //check the balanced status
            (bracket === "]" && lastElement !== "[") ||
            (bracket === "}" && lastElement !== "{")
          ) {
              return false;
          }
        }
      }
      return this.stack.isEmpty(); // after itarate the stack must be empty
    }
}

class Main {
  public static main(): void {
    let RegularChecke = new ExpressionChecker("{{}(){}[]}");
    console.log(RegularChecke.checker());
  }
}

//do not edit this line
Main.main();
