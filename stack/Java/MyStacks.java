class Main{
	public static void main(String[] args){
		
	}
}

public class MyStacks {
	private int[] myStack;
	private int top;
	private int maxSize;

	public MyStacks(int maxSize) {
		this.myStack = new int[maxSize];
		this.top = -1;
		this.maxSize = maxSize;
	}
	
	public boolean isEmpty() {
		return this.top == -1;
	}
	
	public boolean isFull() {
		return (this.top == maxSize -1);
	}
	
	public void push(int data) {
		if(!this.isFull()) {
			this.myStack[++top] = data;
		}
	}
	
	public int pop() {
		if(!this.isEmpty()) {
			return this.myStack[top--];
		}
		System.out.println("Stack is Empty");
		return -1;
	}
	
	public int peek() {
		if(!this.isEmpty()) {
			return this.myStack[top--];
		}
		System.out.println("Stack is Empty");
		return -1;
	}

}


