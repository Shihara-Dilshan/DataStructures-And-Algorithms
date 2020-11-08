class mergeSort:
    def __init__(self):
        pass

    def merge_sort(self, input_list):
        if len(input_list) > 1:
            middle_value = len(input_list) // 2
            left = input_list[:middle_value]

            right = input_list[middle_value:]

            left = self.merge_sort(left)
            right = self.merge_sort(right)

            input_list = list()

            while len(left) > 0 and len(right) > 0:
                if left[0] < right[0]:
                    input_list.append(left[0])
                    left.pop(0)
                else:
                    input_list.append(right[0])
                    right.pop(0)

            # merging two arrays back
            for x in range(len(left)):
                input_list.append(left[x])

            for y in range(len(right)):
                input_list.append(right[y])

        return input_list


def main():
    input_list = [3, 7, 4, 6, 76, 12, 4, 77, 5]

    print("Original list is")
    print(input_list)

    ms = mergeSort()
    answer = ms.merge_sort(input_list)
    print("After merge sorting the list : ")
    print(answer)


if __name__ == '__main__':
    main()




