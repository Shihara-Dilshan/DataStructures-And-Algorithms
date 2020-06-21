/*

2.Check a given word is palindrome or not
	WIRARIW is palindrome


*/


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
        let stack1 = new stacks();
        const originalWord = "WIRARIW";
        let newWord = "";
        
  
        for(let i=0; i <= originalWord.length-1; i++){
          stack1.push(originalWord[i]);//add original word to the stack
        }
  
        /* remember that stack1.size() is not a constant, otherwise it will lead to bugs */
  
        const stackSize =  stack1.size();//temporary store the size of the stack
        
        for(let i=0; i <= stackSize-1; i++){
          newWord = newWord + stack1.pop();//reversing the word using stack
        }
    
        if(originalWord === newWord){
            console.log(`${originalWord} : is a palindrome`);
        }else{
          console.log(`${originalWord} : is not a palindrome`);
        }
    }
  }
  
  //do not edit this line
  Main.main();
  
  