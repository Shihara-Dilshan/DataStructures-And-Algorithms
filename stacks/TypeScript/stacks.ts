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
  }

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
  }

  //Get the size of the stack
  public size = (): number => {
    return this.count;
  }

  //Get the last element of the stack(but not remove the value)
  public peek = (): any => {
    return this.storage[this.count - 1];
  }

  //check the stack is empty or not
  public isEmpty = (): boolean => {
    if (this.count === 0) {
      return true;
    } else {
      return false;
    }
  }
}

class Main{
  public static main():void{
    let stack1 = new stacks();//create a new stack 
    
    stack1.push(1);//add few elements to the stack 
    stack1.push(45);
    stack1.push(98);
    stack1.push(5);
    stack1.push(23);

    console.log(stack1.peek());//print the last element of the stack 

    stack1.pop();//remove the last element from the stack

    console.log(stack1.peek());//print the new last element of the stack 

    console.log(stack1.isEmpty());//check the stack is empty or not

    console.log(stack1.size())//print the size of the stack
  }
}

//do not edit this line
Main.main();
