/*

2.Check a given word is palindrome or not
	WIRARIW is palindrome


*/

/*implementing stacks using java */

public class main{

    private static String originalWord = "WIRARIW";
    private static int tempSize;
    private static String newWord = "";

    public static void main(String args[]) throws Exception{
        stacks stack1 = new stacks();//create a new stack

        for(int i=0; i<= originalWord.length()-1; i++){
            stack1.push(originalWord.charAt(i));//add original word to the stack
        }

        /* remember that stack1.size() is not a constant, otherwise it will lead to bugs */
  
        tempSize = stack1.size();//temporary store the size of the stack

        for(int i=0; i<= tempSize-1; i++){
            newWord = newWord + stack1.pop();//reversing the word using stack
        }

        if(originalWord.equals(newWord)){
            System.out.println( originalWord + " is a palindrome");
        }else{
            System.out.println( originalWord + " is not a palindrome");
        }
        
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


public class stacks{
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
    public char peek(){
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