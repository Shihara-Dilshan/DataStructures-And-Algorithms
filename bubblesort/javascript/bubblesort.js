/* Bubble sort using javascript */

class Bubble {
  constructor(Bubble) {
    this.Bubble = Bubble;
    this.sorted = false;
  }

  //sort the array
  sort() {
    while (!this.sorted) {
      this.sorted = true;

      for (let i = 0; i < this.Bubble.length - 1; i++) { //sorting algorithm
        if (this.Bubble[i] > this.Bubble[i + 1]) {
          let tempValue = this.Bubble[i];
          this.Bubble[i] = this.Bubble[i + 1];
          this.Bubble[i + 1] = tempValue;
          this.sorted = false;
        }
      }
    }
  }

  //print the array1
  print() {
    return this.Bubble;
  }
}

class Main {
  static main() {
    let bubble1 = [5, 2, 9, 12, 1, 8, 5];
    let bubble = new Bubble(bubble1);

    console.log(`Array before sort : ${bubble1}`);
    bubble.sort();
    console.log(`Array after sort : ${bubble.print()}`);
  }
}

Main.main();
