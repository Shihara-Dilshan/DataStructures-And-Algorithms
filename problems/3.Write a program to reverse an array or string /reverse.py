class Reverse:
    def __init__(self, input_value):
        self.stack = []
        self.reverse_word = None
        self.input_value = input_value

    def reverse_me(self):

        if isinstance(self.input_value, str):
            self.reverse_word = ""
            for letter in self.input_value:
                self.stack.append(letter)

            temp = len(self.stack)

            for i in range(temp):
                self.reverse_word = self.reverse_word + self.stack.pop()

            print(self.reverse_word)

        elif isinstance(self.input_value, list):
            self.reverse_word = []
            temp = len(self.input_value)

            for i in range(temp):
                self.reverse_word.append(self.input_value.pop())

            print(self.reverse_word)


if __name__ == '__main__':
    ER = Reverse([1, 1, 43, 21, 1, 22, 2])
    ER2 = Reverse("Shihara")
    ER.reverse_me()
    ER2.reverse_me()