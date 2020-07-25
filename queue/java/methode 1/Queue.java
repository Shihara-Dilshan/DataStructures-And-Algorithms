/* implementing queues with java */

class Node{
    private int data;
    private Node nextNode;

    public Node(int data) {
        this.data = data;
        this.nextNode = null;
    }

    public int getData() {
        return data;
    }

    public void setData(int data) {
        this.data = data;
    }

    public Node getNextNode() {
        return nextNode;
    }

    public void setNextNode(Node nextNode) {
        this.nextNode = nextNode;
    }
}

class queues{
    private Node head;
    private Node tail;

    public queues() {
        this.head = null;
        this.tail = null;
    }

    //check if the queue is empty or not
    public boolean isEmpty(){
        if(this.tail == null){
            return true;
        }
        return false;
    }

    //get the last element of the queue
    public int peek() throws Exception {
        if(this.tail != null){
            return this.tail.getData();
        }else throw new Exception("Queue is Empty");

    }

    //add a new element to the start of the queue
    public void add(int value){
        if(this.head == null){
            this.head = new Node(value);
        }else {
            Node node = new Node(value);
            this.head.setNextNode(node);
            this.tail = node;
        }
    }

    //remove last element from the queue
    public void remove() throws Exception {
        if(this.head == null){
            throw new Exception("Queue is empty");
        }else {
            this.head = this.head.getNextNode();
        }
    }
}



public class Queue {
    public static void main(String[] args) throws Exception {
        queues q1 = new queues();//create a new queue

        q1.add(12);//addd some elements to the queue
        q1.add(8);
        q1.add(902);
        q1.add(76);

        q1.remove();//remove first element from the queue

        System.out.println(q1.peek());//print the last element of the queue

    }
}
