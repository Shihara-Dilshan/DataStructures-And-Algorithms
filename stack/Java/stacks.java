/*implementing stacks using java */

public class main{
    public static void main(String args[]) throws Exception{
        stacks stack1 = new stacks();//create a new stack

        stack1.push(1);//add few elements to the stack 
        stack1.push(45);
        stack1.push(98);
        stack1.push(5);
        stack1.push(23);

        System.out.println(stack1.peek());//print the last element of the stack 

        stack1.pop();//remove the last element from the stack

        System.out.println(stack1.peek());//print the new last element of the stack 
       
        System.out.println(stack1.isEmpty());//check the stack is empty or not

        System.out.println(stack1.size());//print the size of the stack
    }
} 


class Node{
    private int value;
    private Node nextNode;

    Node(int value){
        this.value = value;
        this.nextNode = null;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public Node getNextNode() {
        return nextNode;
    }

    public void setNextNode(Node nextNode) {
        this.nextNode = nextNode;
    }
}


public class stacks{
    private Node top;
    private static int count;
    stacks(){
        this.top = null;
        this.count = 0;
    }

    //Add an value to the stack(to end of the stack)
    public void push(int value){

        if(this.top == null){
            top = new Node(value);//create the first item of the stack
        }else{
            Node node = new Node(value);//create a new node for the stack(top item on the stack)
            node.setNextNode(top);
            top = node;
        }

        count++;
    }

    //Remove the last element from the stack and return the removed value
    public int pop() throws Exception {
        if(this.top == null){
            throw new Exception("Stack is empty");
        }else{
            int value = top.getValue();
            top = top.getNextNode();
            count--;
            return value;

        }

    }

    //Get the size of the stack
    public int size(){
        return count;
    }

    //Get the last element of the stack(but not remove the value)
    public int peek(){
        return top.getValue();
    }

    //check the stack is empty or not
    public boolean isEmpty(){
        if(this.count == 0)
        {
            return true;
        }else{
            return false;
        }

    }


    

}