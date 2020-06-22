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

if __name__ == '__main__':

    stack1 = Stacks(); # create a new stack


    originalWord = "WIRARIW"
    newWord = ""

    for i in originalWord:
        stack1.push(i) # add original word to the stack

    # remember that stack1.size() is not a constant, otherwise it will lead to bugs

    tempSize = stack1.size() # temporary store the size of the stack

    for x in range(tempSize):
        newWord = newWord + stack1.pop() # reversing the word using stack

    if(originalWord == newWord):
        print(originalWord + " is a palindrome")
    else:
        print(originalWord + " is not a palindrome")

