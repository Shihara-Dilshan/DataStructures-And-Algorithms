# Bubble sort using python


class BubbleSort:
    def __init__(self, bubble):
        self.bubble = bubble
        self.sorted = False

    # sort the array
    def sort(self):
        while not self.sorted:
            self.sorted = True
            for i in range(len(self.bubble) - 1):
                if self.bubble[i] > self.bubble[i + 1]:
                    temper_value = self.bubble[i]
                    self.bubble[i] = self.bubble[i + 1]
                    self.bubble[i + 1] = temper_value
                    self.sorted = False

    # print the array
    def print_bubble(self):
        return self.bubble


if __name__ == '__main__':
    arr = [5, 2, 9, 12, 1, 8, 5]
    print("before sorting " + str(arr))
    b1 = BubbleSort(arr)
    b1.sort()
    print("after sorting " + str(b1.print_bubble()))
