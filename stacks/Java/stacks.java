/*implementing stacks using java */

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

}