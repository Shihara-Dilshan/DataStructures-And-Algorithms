# hash table using python


class Hash:
    def __init__(self):
        self.hash_no = 0

    #  get a hash value for a given string
    def hash(self, input_string, max_size):
        for letter in range(len(input_string)):
            self.hash_no = self.hash_no + ord(input_string[letter])

        return self.hash_no % max_size


class HashTable:
    def __init__(self, size):
        self.hash_table = [None] * size
        self.size = size
        self.inserted = False
        self.hash = None

    # add a item to the hash table
    def add(self, key, value):
        self.hash = Hash()
        index = self.hash.hash(key, self.size)
        self.inserted = False

        if self.hash_table[index] is None:
            self.hash_table[index] = [[key, value]]
            self.inserted = True
        else:
            for arr in range(len(self.hash_table[index])):
                if self.hash_table[index][arr][0] == key:
                    self.hash_table[index][arr][1] = value
                    self.inserted = True

        if not self.inserted:
            self.hash_table[1].append([key, value])

    # remove a item to the hash table
    def remove(self, key):
        self.hash = Hash()
        index = self.hash.hash(key, self.size)

        if len(self.hash_table[index]) == 1 and self.hash_table[index][0][0] == key:
            del self.hash_table[index]
        else:
            for arr in range(len(self.hash_table[index])):
                if self.hash_table[index][arr][0] == key:
                    del self.hash_table[index][arr]
                    break

    # get a item from the hash table using the key
    def get(self, key):
        self.hash = Hash()
        index = self.hash.hash(key, self.size)

        if len(self.hash_table[index]) == 1 and self.hash_table[index][0][0] == key:
            return self.hash_table[index]
        else:
            for arr in range(len(self.hash_table[index])):
                if self.hash_table[index][arr][0] == key:
                    return self.hash_table[index][arr][1]
                    break


if __name__ == '__main__':
    HashTable1 = HashTable(4)  # create a hash table

    HashTable1.add("firstname", "shihara")  # add key value pairs for the hash table
    HashTable1.add("lastname", "dilshan")
    HashTable1.add("age", "umesha")
    HashTable1.add("address", "indeevari")
    HashTable1.add("Uni", "sliit")

    print(HashTable1.get("firstname"))  # get a value by key

    HashTable1.remove("Uni")

    print(HashTable1.get("Uni"))  # try to get a removed item by key
