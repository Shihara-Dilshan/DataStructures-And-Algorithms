public class HelloWorld{

     public static void main(String []args){
        Stack s1 = new Stack(5);
        s1.push(12);
        s1.push(1232);
        s1.push(132);
        s1.push(12);
        
        
        System.out.println(s1.peek());
        
        
        
     }
}

class Stack{
    private int[] myStack;
    private int counter = 0;
    private int maxSize;
    
    public Stack(int maxSize){
        this.myStack = new int[maxSize];
        this.maxSize = maxSize;
    }
    
    public boolean push(int data){
        if(counter < maxSize){
            this.myStack[counter] = data;
            counter++;
            return true;
        }else{
            return false;
        }
    }
    
    public boolean pop(){
        if(this.counter == 0 ){
            return false;
        }else{
            this.myStack[counter-1] = 0;
            counter--;
            return true;
        }
    }

    public boolean isEmpty(){
        if(this.counter == 0){
            return true;
        }else{
            return false;
        }
    }

    public int peek(){
         if(this.counter == 0 ){
            return this.myStack[0];
        }else{
            return this.myStack[counter-1];
        }
    }

}