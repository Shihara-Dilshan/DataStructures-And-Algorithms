class QuickSort:
    def __init__(self, input_list):
        self.input_list = input_list

    def partition(self, start, end):
        pivot = self.input_list[start]
        low = start + 1
        high = end

        while True:
            while low <= high and self.input_list[high] >= pivot:
                high = high - 1

            while low <= high and self.input_list[low] <= pivot:
                low = low + 1

            if low <= high:
                self.input_list[low], self.input_list[high] = self.input_list[high], self.input_list[low]
            else:
                break

        self.input_list[start], self.input_list[high] = self.input_list[high], self.input_list[start]

        return high

    def quick_sort(self, start, end):
        if start >= end:
            return

        p = self.partition(start, end)
        self.quick_sort(start, p - 1)
        self.quick_sort(p + 1, end)


def main():
    array = [29, 99, 27, 41, 66, 28, 44, 78, 87, 19, 31, 76, 58, 88, 83, 97, 12, 21, 44]
    q = QuickSort(array)
    q.quick_sort(0, len(array)-1)
    print(q.input_list)


if __name__ == '__main__':
    main()
