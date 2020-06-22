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
    }
  
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
    }
  
    //Get the size of the stack
    size = () => {
      return this.count;
    }
  
    //Get the last element of the stack(but not remove the value)
    peek = () => {
      return this.storage[this.count - 1];
    }
  
    //check the stack is empty or not
    isEmpty = () => {
      if (this.count == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  class Reverse{
    
    constructor(input){
      this.input = input;
      this.stack = new Stack();
      this.reverseWOrd = "";
    }

     ReverseMe(){

      for(let letter of this.input.split("")){//put string into an array
          this.stack.push(letter);
      }

      let sizeOfStack = this.stack.size(); //tempory store the size of the stack

      for(let i=0; i <= sizeOfStack-1; i++){//create the reverse of the string
          this.reverseWOrd = this.reverseWOrd + this.stack.pop(); 
      }
      return this.reverseWOrd;
    }
}


class Main{
  static main(){
    let res = new Reverse("shihara");//create a new stack 
    console.log(res.ReverseMe()); 
  }
}

//do not edit this line
Main.main();

