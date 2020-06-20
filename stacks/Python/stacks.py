# implementing stacks using python


class Stacks:
    def __init__(self):
        self.count = 0
        self.storage = {}

    # Add an value to the stack(to end of the stack)
    def push(self, value):
        self.storage[self.count] = value
        self.count = self.count + 1

    # Remove the last element from the stack and return the removed value
    def pop(self):
        # if the stack is empty return None
        if self.count == 0:
            raise ValueError('stack is empty')
        else:
            self.count = self.count - 1  # reduce the size of the stack by 1
            pop_value = self.storage[self.count]  # extract the last value from the stack to a variable
            del self.storage[self.count]  # remove the value from the stack
            return pop_value

    # Get the size of the stack
    def size(self):
        return self.count

    # Get the last element of the stack(but not remove the value)
    def peek(self):
        return self.storage[self.count-1]


    # check the stack is empty or not
    def is_empty(self):
        if self.count == 0:
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
    