class MyStack:
    def __init__(self):
        self.my_stack = []

    def is_empty(self):
        return len(self.my_stack) == 0

    def push(self, data):
        self.my_stack.append(data)

    def pop(self):
        if not self.is_empty():
            return self.my_stack.pop()

    def peek(self):
        if not self.is_empty():
            return self.my_stack[len(self.my_stack) - 1]

    def print(self):
        print(self.my_stack)


def main():
    temp = []
    temp_stack = MyStack()

    stack1 = MyStack()
    stack1.push(12)
    stack1.push(21)
    stack1.push(99)
    stack1.push(18)
    stack1.push(15)

    while not stack1.is_empty():
        temp.append(stack1.pop())

    if len(temp) % 2 == 0:
        print("There i sno middle number")
    else:

        del temp[int(len(temp) / 2)]

    for i in temp:
        temp_stack.push(i)

    while not temp_stack.is_empty():
        stack1.push(temp_stack.pop())

    stack1.print()


if __name__ == '__main__':
    main()
