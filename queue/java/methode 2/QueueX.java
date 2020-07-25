import java.util.Arrays;


class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		QueueX sdd = new QueueX(5);
		sdd.insert(2);
		sdd.insert(22);
		sdd.insert(12);
		sdd.insert(92);
		sdd.insert(1112);
		sdd.remove();
		sdd.remove();
		sdd.remove();
		sdd.remove();
		sdd.remove();
		sdd.remove();
		sdd.remove();
		sdd.remove();
		sdd.remove();
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
		return this.tail == this.size - 1 ;
	}
	
	public void insert(int data) {
		if(!this.isFull()) {
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
	
	public void remove() {
		 if(!this.isEmpty()) {
			if(this.head != this.tail) {
				this.queue[this.head++] = 0;
				this.noOfElements--;
				return;
			}
			this.queue[this.head] = 0;
			this.noOfElements = 0;
			
			//remake the queue 
			this.head = 0;
			this.tail = -1;
		 }
	}
	
	

	@Override
	public String toString() {
		return "QueueX [queue=" + Arrays.toString(queue) + ", head=" + head + ", tail=" + tail + ", size=" + size
				+ ", noOfElements=" + noOfElements + "]";
	}
		

}
