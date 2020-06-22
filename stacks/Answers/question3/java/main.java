/*implementing stacks using java */

public class main{
    public static void main(String args[]) throws Exception{
        Reverse r1 = new Reverse("shihara");
        System.out.println(r1.ReverseMe());
    }
}

class Reverse{
    private String input;
    private stacks stack;
    private String reverseWord;
    private int temp;

    public Reverse(String input) {
        this.input = input;
        this.stack = new stacks();
        this.reverseWord = "";
    }

    public String ReverseMe() throws Exception {
        for(char letter : input.toCharArray()){//put string into an array
            this.stack.push(letter);
        }

        temp = this.stack.size();//tempory store the size of the stack

        for(int i = 0; i <= temp-1; i++){//create the reverse of the string
            this.reverseWord = this.reverseWord + this.stack.pop();
        }
        return this.reverseWord;
    }
}

class Node{
    private char value;
    private Node nextNode;

    Node(char value){
        this.value = value;
        this.nextNode = null;
    }

    public char getValue() {
        return value;
    }

    public void setValue(char value) {
        this.value = value;
    }

    public Node getNextNode() {
        return nextNode;
    }

    public void setNextNode(Node nextNode) {
        this.nextNode = nextNode;
    }
}


class stacks{
    private Node top;
    private static int count;
    stacks(){
        this.top = null;
        this.count = 0;
    }

    //Add an value to the stack(to end of the stack)
    public void push(char value){

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
    public char pop() throws Exception {
        if(this.top == null){
            throw new Exception("Stack is empty");
        }else{
            char value = top.getValue();
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