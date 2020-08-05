package linkedLists;

public class Main {
	public static void main(String[] args) {
		LinkedListsClass linkedList1 = new LinkedListsClass();
		linkedList1.insertLast(34);
		linkedList1.insertLast(134);
		linkedList1.insertLast(324);
		linkedList1.insertLast(32334);

		linkedList1.displayLinkedList();
		System.out.println(linkedList1.countNodes());

	}
}

class Node {
	public int data;
	public Node nextNode;

	public Node(int data) {
		this.data = data;
		this.nextNode = null;
	}

	@Override
	public String toString() {
		return "Node [data=" + data + ", nextNode=" + nextNode + "]";
	}

}

class LinkedListsClass {
	private Node head;

	public LinkedListsClass() {
		super();
		this.head = null;
	}

	public boolean isEmpty() {
		return this.head == null;
	}

	public int find(int data) {
		Node current;
		if (this.isEmpty()) {
			System.out.println("Linked list is empty");
			return -99;
		} else {
			current = this.head;
			while (current != null) {
				if (current.data == data) {
					return current.data;
				}
				current = current.nextNode;
			}
			System.out.println("Value is not present");
			return -99;
		}
	}

	public void displayLinkedList() {
		Node current;
		if (this.isEmpty()) {
			System.out.println("Display is empty");
			return;
		} else {
			current = this.head;
			while (current != null) {
				System.out.print(current.data + " ");
				current = current.nextNode;
			}
			System.out.println("");
		}

	}

	public void insertLast(int data) {
		Node newNode = new Node(data);
		Node current;
		if (this.isEmpty()) {
			this.head = newNode;
			return;
		}
		current = this.head;
		while (current.nextNode != null) {
			current = current.nextNode;
		}
		current.nextNode = newNode;

	}

	public void InsertFirst(int data) {
		Node newNode = new Node(data);
		Node tempNode;

		if (this.isEmpty()) {
			this.head = newNode;
			return;
		}
		tempNode = this.head;
		this.head = newNode;
		newNode.nextNode = tempNode;

	}

	public void insertAfter(int key, int data) {
		Node newNode;
		Node currrent;
		Node tempNode;

		if (this.isEmpty()) {
			System.out.println("List is empty");
			return;
		} else if (this.head.nextNode == null) {
			if (this.head.data == key) {
				newNode = new Node(data);
				this.head.nextNode = newNode;
				return;
			}
			System.out.println("No such a value");
		} else {
			currrent = this.head;
			newNode = new Node(data);
			while (currrent.nextNode != null) {
				if (currrent.data == key) {
					tempNode = currrent.nextNode;
					currrent.nextNode = newNode;
					newNode.nextNode = tempNode;
					return;
				}
				currrent = currrent.nextNode;
			}
			if (currrent.nextNode == null && currrent.data == key) {
				currrent.nextNode = newNode;
				return;
			}
		}

		System.out.println("No such a value");

	}

	public int deleteFirst() {
		Node tempNode;

		if (this.isEmpty()) {
			System.out.println("Linked is empty");
			return -99;
		}
		tempNode = this.head;
		this.head = this.head.nextNode;
		tempNode.nextNode = null;
		return tempNode.data;

	}

	public int deleteLast() {
		Node current, previousNode;

		if (this.isEmpty()) {
			System.out.println("linked is empty");
			return -99;
		} else if (this.head.nextNode == null) {
			this.head = null;
			return 1;
		}

		current = previousNode = this.head;
		while (current.nextNode != null) {
			previousNode = current;
			current = current.nextNode;
		}

		previousNode.nextNode = null;
		return 1;
	}

	
	 public int deleteByData(int data) {
		 //to be implemented
		 return -1;
	 }
	 
	 
	 
	 public int deleteByindex(int index) {
		 //to be implemented
		 return -1;
	 }
	 

	public int countNodes() {
		int counter;
		Node current;
		if (this.isEmpty()) {
			System.out.println("Linked list is empty");
			return -99;
		}

		counter = 1;
		current = this.head;

		while (current.nextNode != null) {
			counter++;
			current = current.nextNode;
		}

		return counter;

	}

}
