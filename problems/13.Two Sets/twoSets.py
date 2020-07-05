import math

input_array = [1, 2, 3, 4]
all_sub_array = []

for i in range(int(math.pow(2, len(input_array)))):
    temp = str(bin(i))[2:]
    while len(input_array) != len(temp):
        temp = "0" + temp

    count = 0
    temp_array = []
    for each1 in temp:
        if each1 == "1":
            temp_array.append(input_array[count])
        else:
            pass
        count = count + 1
    all_sub_array.append(temp_array)

counter = 0
for each_array in all_sub_array:
    for i in range(len(all_sub_array)-1):
        counter = counter + 1
        if len(each_array) + len(all_sub_array[counter]) == len(input_array) and each_array != all_sub_array[counter]:
            if sum(each_array) == sum(all_sub_array[counter]):
                print(f'{each_array} , {all_sub_array[counter]}')
    counter = 0


