# implementing queues with java


class Node:
    def __init__(self, value):
        self.value = value
        self.next_node = None;


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    # check if the queue is empty or not
    def is_empty(self):
        if self.head is None:
            return True
        else:
            return False

    # get the last element of the queue
    def peek(self):
        if self.head is None:
            pass
        else:
            return self.tail.value

    # add a new element to the start of the queue
    def add(self, value):
        if self.head is None:
            self.head = Node(value)
        else:
            node = Node(value)
            self.head.next_node = node
            self.tail = node

    # remove last element from the queue
    def remove(self):
        if self.head is None:
            pass
        else:
            self.head = self.head.next_node


if __name__ == '__main__':
    q1 = Queue()  # create a new queue

    q1.add(1)  # add some elements to the queue
    q1.add(2)
    q1.add(12)
    q1.add(223)

    q1.remove()  # remove first element from the queue

    print(q1.peek())  # print the last element of the queue
