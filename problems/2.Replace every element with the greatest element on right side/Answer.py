class Main:
    def __init__(self):
        self.original_array = [1, 33, 23, 5, 7, 12]
        self.current = len(self.original_array)

    def change(self):
        length = len(self.original_array) - 1
        for index in range(len(self.original_array) - 1):
            maximum = self.original_array[index + 1]
            for laa in range(index, len(self.original_array)-1):
                if self.original_array[laa+1] > maximum:
                    maximum = self.original_array[laa+1]

            self.original_array[index] = maximum
            length = length - 1

        self.original_array[len(self.original_array)-1] = -1
        print(self.original_array)


if __name__ == '__main__':
    m = Main()
    m.change()
