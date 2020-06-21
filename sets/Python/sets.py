# sets implemented using python


class Sets:
    def __init__(self):
        self.set = []

    # check a value is existing on the current set
    def has(self, value):
        if value in self.set:
            return True
        else:
            return False

    # get the current set values
    def values(self):
        return self.set

    # add a new element to the set
    def add(self, value):
        if value in self.set:
            return False
        else:
            self.set.append(value)
            return True

    # remove an existing element from the set
    def remove(self, value):
        if value in self.set:
            self.set.remove(value)
            return True
        else:
            return False

    # get the current size if the set
    def size(self):
        return len(self.set)

    # combine two sets
    def union(self, another_set):
        for i in another_set.set:
            self.set.append(i)

        return self.values()

    # get the intersection( common values in both sets )
    def intersection(self, another_set):
        intersection = []
        for i in another_set.set:
            if self.has(i):
                intersection.append(i)

        return intersection

    # get the different( different values in both sets )
    def difference(self, another_set):
        difference = []
        for i in another_set.set:
            if self.has(i):
                pass
            else:
                difference.append(i)

        return difference

    # check another set is subset of this set or not
    def subset(self, another_set):
        size_of_another_set = len(another_set.set)
        size_of_intersection = len(self.intersection(another_set))

        if size_of_another_set == size_of_intersection:
            return True
        else:
            return False


set1 = Sets()  # create a new set
set2 = Sets()  # create another new set

set1.add(1)  # add new items to the set1
set1.add(2221)
set1.add(123)  # trying to add a duplicate value
set1.add(33)

set2.add(221)  # add new items to the set2
set2.add(123)
set2.add(33)
set2.add(6)

print(set1.has(1))  # check if the specific number exist on the set1
print(set1.values())  # print the values of the set1

set1.remove(1);  # remove a value from the set
print(set1.values())  # print the values of the set1 after removing values

print(set1.size())  # print the size of the set

print(set1.union(set2))  # adding to sets

print(set1.intersection(set2))  # get the common value/s between two sets

print(set1.difference(set2))  # get the uncommon value/s between two sets

print(set1.subset(set2))  # checking is that set2 is a subset of set1 or not
