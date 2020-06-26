/*implementing stacks using java */

public class main{
    public static void main(String args[]) throws Exception{
        ExpressionChecker stack1 = new ExpressionChecker("{}()[]]");//create a new stack
        System.out.println(stack1.checker());

    }
}

class ExpressionChecker{

    private String expression;
    private stacks stack;

    public ExpressionChecker(String expression) {
        this.expression = expression;
        this.stack = new stacks();//create a new stack
    }

    public boolean checker() throws Exception {
        if(this.expression.length() % 2 == 1){//if the expression has odd number of charactors
            return false;
        }

        for(char letter : this.expression.toCharArray() ){//put each bracket from the expression to a array and itarate
            if(letter == '(' || letter == '{' || letter == '['){
                this.stack.push(letter);//put opening brackets to the stack
            }

            if(letter == ')' || letter == '}' || letter == ']'){

                if(this.stack.isEmpty()){//stack cannot be empty at this point
                    return false;
                }

                char lastElement = this.stack.pop();//when a closing bracket is found pop the last element from the stack

                if((lastElement == '(' && letter != ')') ||//check the balanced status
                  (lastElement == '{' && letter != '}') ||
                 (lastElement == '[' && letter != ']') )
                {
                    return false;
                }
            }

        }
        return this.stack.isEmpty();// after itarate the stack must be empty

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