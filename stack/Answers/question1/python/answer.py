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
        return self.storage[self.count - 1]

    # check the stack is empty or not
    def is_empty(self):
        if self.count == 0:
            return True
        else:
            return False


class ExpressionChecker:
    def __init__(self, expression):
        self.expression = expression
        self.stack = Stacks() # create a new stack

    def checker(self):
        if len(self.expression) % 2 == 1: # if the expression has odd number of charactors
            return False


        for letter in self.expression:
            if letter == "(" or letter == "{" or letter == "[":
                self.stack.push(letter) # put opening brackets to the stack

            if letter == ")" or letter == "}" or letter == "]":
                if self.stack.is_empty(): # stack cannot be empty at this point
                    return False

                last_element = self.stack.pop() # when a closing bracket is found pop the last element from the stack

                if ((last_element == '(' and letter != ')') or # check the balanced status
                        (last_element == '{' and letter != '}') or
                        (last_element == '[' and letter != ']')):
                    return False

        return self.stack.is_empty() # after itarate the stack must be empty


if __name__ == '__main__':
    expressionChecker = ExpressionChecker("{}[]()");  # create a new stack
    print(expressionChecker.checker())
