class Node:
    def __init__(self, value):
        self.value = value
        self.next_node = None

    def get_value(self):
        return self.value

    def set_value(self, value):
        self.value = value

    def get_next_node(self):
        return self.next_node

    def set_next_node(self, next_node):
        self.next_node = next_node


class Stacks:

    def __init__(self):
        self.top = Node(None)
        self.count = 0

    # Add an value to the stack(to end of the stack)
    def push(self, value):
        if self.top is None:
            self.count = self.count + 1
            self.top = Node(value)  # create the first item of the stack

        else:
            node = Node(value)  # create a new node for the stack(top item on the stack)
            node.set_next_node(self.top)
            self.top = node
            self.count = self.count + 1

    # Remove the last element from the stack and return the removed value
    def pop(self):
        if self.top is None:
            raise ValueError('stack is empty')
        else:
            value = self.top.get_value()
            self.top = self.top.get_next_node()
            self.count = self.count - 1
            return value

    #  Get the size of the stack
    def size(self):
        return self.count

    #  Get the last element of the stack(but not remove the value)
    def peek(self):
        return self.top.get_value()


    # check the stack is empty or not
    def is_empty(self):
        if self.top is None:
            return True
        else:
            return False


stack1 = Stacks(); # create a new stack


stack1.push(45); # add few elements to the stack 
stack1.push(98);
stack1.push(5);
stack1.push(23);

print(stack1.peek()) # print the last element of the stack 

stack1.pop() # remove the last element from the stack

print(stack1.peek()) # print the new last element of the stack 

print(stack1.is_empty()) # check the stack is empty or not

print(stack1.size()) # print the size of the stack