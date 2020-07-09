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

    def reverse(self):
        self.reverse_stack.append(self.stack.pop())
        if len(self.stack) != 0:
            return self.reverse()

    def print(self):
        print(self.reverse_stack)


def main():
    stack1 = Stack()
    stack1.push(2)
    stack1.push(24)
    stack1.push(231)
    stack1.push(12)
    stack1.reverse()
    stack1.print()


if __name__ == '__main__':
    main()
