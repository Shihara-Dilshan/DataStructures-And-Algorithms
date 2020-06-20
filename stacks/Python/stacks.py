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
            return None
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



