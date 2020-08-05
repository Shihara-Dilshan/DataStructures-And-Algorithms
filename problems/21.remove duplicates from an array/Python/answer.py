x = [1, 2, 54, 54, 6, 7, 4, 3, 2, 221]

array = []

for i in x:
    if not array.__contains__(i):
        array.append(i)

print(array)
