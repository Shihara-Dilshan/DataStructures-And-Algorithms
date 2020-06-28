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
  
  class Reverse{
      private input:string;
      private stack:stacks;
      private reverseWOrd:string;

      constructor(input:string){
        this.input = input;
        this.stack = new stacks();
        this.reverseWOrd = "";
      }

      public ReverseMe():string{

        for(let letter of this.input.split("")){//put string into an array then itarate
            this.stack.push(letter);//push items to the stack
        }

        let sizeOfStack:number = this.stack.size(); //tempory store the size of the stack

        for(let i=0; i <= sizeOfStack-1; i++){//create the reverse of the string
            this.reverseWOrd = this.reverseWOrd + this.stack.pop(); 
        }
        return this.reverseWOrd;
      }
  }


  class Main{
    public static main():void{
      let res = new Reverse("shihara");//create a new stack 
      console.log(res.ReverseMe()); 
    }
  }
  
  //do not edit this line
  Main.main();
  
  