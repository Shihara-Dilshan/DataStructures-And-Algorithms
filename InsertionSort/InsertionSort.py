class InsertionSOrt:
    def __init__(self, input_array):
        self.input_array = input_array

    def sort(self):
        for i in range(1, len(self.input_array)):
            current = self.input_array[i]
            previous = i - 1
            while previous >= 0 and self.input_array[previous] > current:
                self.input_array[previous + 1] = self.input_array[previous]
                previous = previous - 1
            self.input_array[previous + 1] = current

    def print_sorted(self):
        print(self.input_array)


def main():
    inputA = [1, 2, 4, 3, 0, 10]
    insertion = InsertionSOrt(inputA)
    insertion.sort()
    insertion.print_sorted()


if __name__ == '__main__':
    main()
