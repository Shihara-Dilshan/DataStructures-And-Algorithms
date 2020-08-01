
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LinkedLists list1 = new LinkedLists();
		list1.insertFirst(3);
		list1.insertLast(5);
		list1.insertLast(15);
		list1.insertLast(521);
		list1.insertLast(521);
		list1.insertLast(5);
		
		list1.delete(5221);
		
		list1.displayList();

	}

}



class Node {
	public Node NodeNext;
	public int data;
	
	public Node(int data) {
		this.data = data;
		this.NodeNext = null;
	}

	
	
	
}

class LinkedLists{
	private Node head;

	public LinkedLists() {
		this.head = null;
	}
	
	public boolean isEmpty() {
		return this.head == null;
	}
	
	public void insertFirst(int data) {
		Node newNode = new Node(data);
		if(this.isEmpty()) {
			this.head = newNode;
			return;
		}
		Node tempFIrstNode = this.head;
		this.head = newNode;
		newNode.NodeNext = tempFIrstNode;
		
	}
	
	public void insertLast(int data) {
		Node newNode = new Node(data);
		if(this.isEmpty()) {
			this.insertFirst(data);
			return;
		}
		Node currentNode = this.head;
		while(currentNode.NodeNext != null) {
			currentNode = currentNode.NodeNext;
		}
		
		currentNode.NodeNext = newNode;
	
	}
	
	public void displayList() {
		if(this.isEmpty()) {
			System.out.println("Linked list is empty");
			return;
		}
		Node currentNode = this.head;
		while(currentNode != null) {
			System.out.println(currentNode.data);
			currentNode = currentNode.NodeNext;
		}
		
	}
	
	
	public void insertAfter(int key,int data) {
		Node currentNode = this.head;
		Node previousNode = null;
		
		if(this.isEmpty()) {
			System.out.println("Linked list is empty");
			return;
		}
		
		if(this.head.NodeNext == null) {
			if(this.head.data != key) {
				System.out.println("No matches");
				return;
			}
			Node newNode = new Node(data);
			this.head.NodeNext = newNode;
			return;
		}
		
		while(currentNode != null) {
			
			if(currentNode.data == key) {
				Node newNode = new Node(data);
				Node tempnode = currentNode.NodeNext;
				currentNode.NodeNext = newNode;
				newNode.NodeNext = tempnode;
				return;
			}
			previousNode = currentNode;
			currentNode = currentNode.NodeNext;
		}
		
		System.out.println("No matches");
	}

	public int delete(int key) {
		Node currentNode = this.head;
		Node previousNode = null;
		
		if(this.isEmpty()) {
			System.out.println("Linked list is empty");
			return -1;
		}
		
		if(this.head.NodeNext == null) {
			if(this.head.data != key) {
				System.out.println("No matches");
				return -1;
			}
			
			int temp = this.head.data;
			this.head = null;
			return temp;
		}
		
		while(currentNode != null) {
			
			if(currentNode.data == key) {
				previousNode.NodeNext = currentNode.NodeNext;
				int temp = currentNode.data;
				return temp;
			}
			previousNode = currentNode;
			currentNode = currentNode.NodeNext;
		}
		
		System.out.println("No matches");
		return -1;
	}
	
	public boolean find(int key) {
		Node currentNode = this.head;
		Node previousNode = null;
		
		if(this.isEmpty()) {
			System.out.println("Linked list is empty");
			return false;
		}
		
		if(this.head.NodeNext == null) {
			if(this.head.data != key) {
				System.out.println("No matches");
				return false;
			}
			
			return true;
		}
		
		while(currentNode != null) {
			
			if(currentNode.data == key) {
				return true;
			}
			previousNode = currentNode;
			currentNode = currentNode.NodeNext;
		}
		
		System.out.println("No matches");
		return false;
	}
}