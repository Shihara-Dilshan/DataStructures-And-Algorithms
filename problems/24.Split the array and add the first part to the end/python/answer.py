x = [12, 10, 5, 6, 52, 36];

inputValue = int(input("Enter the index : "))

for i in range(inputValue):
    temp = x.pop(0)
    x.append(temp)

print(x)