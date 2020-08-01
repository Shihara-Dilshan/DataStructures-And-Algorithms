import java.util.Arrays;
import java.util.Stack;


class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		QueueX sdd = new QueueX(8);
		Stack stack1 = new Stack<Integer>();
		sdd.insert(2);
		sdd.insert(22);
		sdd.insert(12);
		sdd.insert(92);
		sdd.insert(12);
		sdd.insert(212);
		sdd.insert(902);
		sdd.insert(1);
	
		for(int i=0; i< 5; i++) {
			stack1.push(sdd.remove());
		}
		
		while(!stack1.isEmpty()) {
			sdd.insert((int)stack1.pop());
		}
		
		System.out.println(sdd);

	}

}



public class QueueX {
	private int[] queue;
	private int head;
	private int tail;
	private int size;
	private int noOfElements;
	
	public QueueX(int size) {
		super();
		this.noOfElements = 0;
		this.queue = new int[size];
		this.size = size;
		this.head = 0;
		this.tail = -1;
	}
	
	public boolean isEmpty() {
		return this.noOfElements == 0;
	}
	
	public boolean isFull() {
		return this.noOfElements == this.size;
	}
	
	public void insert(int data) {
		if(!this.isFull()) {
			if(this.tail == this.size-1) {
				this.tail = -1;
			}
			this.queue[++this.tail] = data;
			this.noOfElements++;
			return;
		}
		System.out.println("Queue is Full");
	}
	
	public int peekFront() {
		if(!this.isEmpty()) {
			return this.queue[this.head];
		}
		System.out.println("Queue is Empty");
		return -1;
	}
	
	public int remove() {
		int temp = -99;
		 if(!this.isEmpty()) {
			 temp = this.queue[this.head];
			if(this.head != this.tail) {
				this.queue[this.head++] = 0;
				this.noOfElements--;
				return temp;
			}
			this.queue[this.head] = 0;
			this.noOfElements = 0;
			
			
		 }
		 return temp;
	}
	
	

	@Override
	public String toString() {
		return "QueueX [queue=" + Arrays.toString(queue) + ", head=" + head + ", tail=" + tail + ", size=" + size
				+ ", noOfElements=" + noOfElements + "]";
	}
		

}
