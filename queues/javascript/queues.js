/* implementing queues with javascript */

  
  class queues   {

    constructor() {
      this.size = 0;
      this.queue = [];
    }
  
    //get the size of the queue
    isEmpty() {
      return this.size === 0;
    }
  
    //get the first element of the queue
    peek() {
      if(!this.isEmpty()){
          return this.queue[0];
      }else{
          throw new Error("queue is Empty");
      }
  
    }
  
    //add a new element to the start of the queue
    add(value) {
      this.queue.unshift(value);
      this.size++;
    }
  
    //remove last element from the queue
    remove() {
      this.size--;
      return this.queue.shift();
    }
  }
  
  class Main {
     static main() {
      let queues1 = new queues();//create a new queue
  
      
      queues1.add(12);//addd some elements to the queue
      queues1.add(1222);
      queues1.add(2);
      queues1.add(11222122);
  
      queues1.remove();//remove first element from the queue
      console.log(queues1.peek());//print the last element of the queue
    }
  }
  
  //don't edit any line afer this comment
  Main.main();
  