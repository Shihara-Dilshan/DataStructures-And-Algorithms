class BubbleSort:
    def __init__(self, input_array):
        self.sorted = False
        self.input_array = input_array

    def sort(self):
        while not self.sorted:
            self.sorted = True
            for i in range(0, len(self.input_array) - 1):
                if self.input_array[i] > self.input_array[i + 1]:
                    self.input_array[i], self.input_array[i + 1] = self.input_array[i + 1], self.input_array[i]
                    self.sorted = False

    def print_sorted(self):
        print(self.input_array)


def main():
    listA = [1, 3, 0, 23, 2, 4, 6]
    bubble = BubbleSort(listA)
    bubble.sort()
    bubble.print_sorted()


if __name__ == '__main__':
    main()
