class Stack:
    def __init__(self):
        self.stack = []
        self.sorted = False

    def push(self, data):
        self.stack.append(data)

    def pop(self):
        return self.stack.pop()

    def isEmpty(self):
        return len(self.stack) == 0

    def peek(self):
        return self.stack[len(self.stack) - 1]

    def sort(self):
        self.sorted = True
        for i in range(len(self.stack)-1):
            if self.stack[i] > self.stack[i+1]:
                temp = self.stack[i]
                self.stack[i] = self.stack[i+1]
                self.stack[i+1] = temp
                self.sorted = False
        if not self.sorted: 
            return self.sort()

    def print(self):
        print(self.stack)


def main():
    stack1 = Stack()
    stack1.push(2)
    stack1.push(24)
    stack1.push(231)
    stack1.push(12)
    stack1.push(1)
    stack1.sort()
    stack1.print()


if __name__ == '__main__':
    main()
