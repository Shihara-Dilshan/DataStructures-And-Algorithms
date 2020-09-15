class InsertionSort:
    def __init__(self, input_list):
        self.input_list = input_list

    def sort(self):
        for i in range(1, len(self.input_list)):
            j = i - 1
            key = self.input_list[i]
            while j >= 0 and key < self.input_list[j]:
                self.input_list[j + 1] = self.input_list[j]
                j = j - 1
            self.input_list[j+1] = key

    def printSorted(self):
        print(self.input_list)


def main():
    my_list = [1, 2, 3, 43, 22, 21, 4, 0]
    sortList = InsertionSort(my_list)
    sortList.sort()
    sortList.printSorted()


if __name__ == '__main__':
    main()
