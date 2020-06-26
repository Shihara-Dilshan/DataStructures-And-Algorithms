/* hash table using javascript */

class Hash {
  //get a hash value for a given string
  static hash(input, maxSize) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = hash + input.charCodeAt(i);
    }
    return hash % maxSize;
  }
}

class HashTable {
  constructor(sizeLimit) {
    this.hashTable = [];
    this.sizeLimit = sizeLimit;
  }

  //add a item to the hash table
  add(key, value) {
    let index = Hash.hash(key, this.sizeLimit);
    let inserted = false;

    if (this.hashTable[index] === undefined) {
      this.hashTable[index] = [[key, value]];
      inserted = true;
    } else {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
          this.hashTable[index][i][1] = value;
          inserted = true;
        }
      }
    }

    if (inserted === false) {
      this.hashTable[index].push([key, value]);
    }
  }

  //remove a item to the hash table
  remove(key) {
    let index = Hash.hash(key, this.sizeLimit);

    if (this.hashTable[index] === undefined) {
        return undefined;
      }

    if (
      this.hashTable[index].length === 1 &&
      this.hashTable[index][0][0] === key
    ) {
      delete this.hashTable[index];
    } else {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
          delete this.hashTable[index][i];
        }
      }
    }
  }

  //get a item from the hash table using the key
  get(key) {
    let index = Hash.hash(key, this.sizeLimit);

    if(this.hashTable[index] === undefined){
        return undefined;
    }

    if (
      this.hashTable[index].length === 1 &&
      this.hashTable[index][0][0] === key
    ) {
      return this.hashTable[index][0][1];
    } else {
      for (let i = 0; i < this.hashTable[index].length; i++) {
        if (this.hashTable[index][i][0] === key) {
          return this.hashTable[index][i][1];
        }
      }
    }
    return undefined;
  }
}

class Main {
  static main() {
    let HashTable1 = new HashTable(4);//create a hash table

    HashTable1.add("firstname", "shihara");//add key value pairs for the hash table
    HashTable1.add("lastname", "dilshan");
    HashTable1.add("age", "umesha");
    HashTable1.add("address", "indeevari");
    HashTable1.add("Uni", "sliit");

    console.log(HashTable1.get("firstname"));//get a value by key

    HashTable1.remove("Uni");

    console.log(HashTable1.get("Uni"));//try to get a removed item by key

  }
}

//do not edit after this line
Main.main();
