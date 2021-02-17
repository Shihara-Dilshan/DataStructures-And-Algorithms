public class Main {
	public static void main(String[] args) throws StackExeption {
		// TODO Auto-generated method stub 
		Stack<Integer> myStack = new Stack<>(5);
		myStack.push(34);
		myStack.push(4);
		myStack.push(3);
		myStack.push(5);
		myStack.push(99);	
		System.out.println(myStack.peek());
	}
}



class Stack<T>{
	private final int size;
	private int head;
	private final T[] stack;
	
	
	@SuppressWarnings("unchecked")
	public Stack(int size){
		this.size = size;
		this.head = -1;
		this.stack = (T[]) new Object[this.size];
	}
	
	public boolean isEmpty() {
		return this.head == -1;
	}
	
	public boolean isFull() {
		return this.head == this.size-1;
	}
	
	public void push(T value) throws StackExeption {
		if(this.isFull()) {
			throw new StackExeption("Stack out of bounce");
		}
		this.stack[++this.head] = value;
	}
	
	public T peek() throws StackExeption {
		if(this.isEmpty()) {
			throw new StackExeption("Stack is empty");
		}
		return this.stack[this.head];
	}
	
	public int size() {
		return this.head + 1;
	}
	
	public T pop() throws StackExeption {
		if(this.isEmpty()) {
			throw new StackExeption("Stack is empty");
		}
		return this.stack[this.head--];
	}

}

class StackExeption extends Exception{
	private static final long serialVersionUID = 1L;

	StackExeption(String msg){
		super(msg);
	}
}



