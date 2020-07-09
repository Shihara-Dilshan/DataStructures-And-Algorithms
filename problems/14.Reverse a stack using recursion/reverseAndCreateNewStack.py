class Stack:
    def __init__(self):
        self.stack = []
        self.reverse_stack = []

    def push(self, data):
        self.stack.append(data)

    def pop(self):
        return self.stack.pop()

    def isEmpty(self):
        return len(self.stack) == 0

    def peek(self):
        return self.stack[len(self.stack) - 1]

    def get_stack(self):
        return self.stack

    def print(self):
        print(self.stack)


class ReverseStack:
    def __init__(self):
        self.reverse_stack = Stack()

    def reverse(self, input_stack):
        self.reverse_stack.push(input_stack.pop())
        if len(input_stack.get_stack()) != 0:
            return self.reverse(input_stack)

    def print(self):
        print(self.reverse_stack.print())


def main():
    stack1 = Stack()
    stack1.push(2)
    stack1.push(24)
    stack1.push(231)
    stack1.push(12)

    r1 = ReverseStack()
    r1.reverse(stack1)
    r1.print()


if __name__ == '__main__':
    main()
