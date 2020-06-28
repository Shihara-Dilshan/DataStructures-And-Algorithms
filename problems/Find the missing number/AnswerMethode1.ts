class Main {
  public static main(): void {
    let ArrayUnsorted: Array<number> = [1, 2, 3, 7, 4, 5];
    let bubble = new Bubble(ArrayUnsorted);
    bubble.sort();
    let ArraySorted: Array<number> = bubble.print();
    
    console.log(`missing number is : ${checker.check(ArraySorted)}`);
  }
}

class Bubble {
  private bubble: Array<number>;
  private sorted: boolean;

  constructor(bubble: Array<number>) {
    this.bubble = bubble;
    this.sorted = false;
  }

  public sort(): void {
    while (!this.sorted) {
      this.sorted = true;
      for (let i = 0; i < this.bubble.length - 1; i++) {
        if (this.bubble[i] > this.bubble[i + 1]) {
          let tempValue: number = this.bubble[i];
          this.bubble[i] = this.bubble[i + 1];
          this.bubble[i + 1] = tempValue;
          this.sorted = false;
        }
      }
    }
  }

  public print(): Array<number> {
    return this.bubble;
  }
}

class checker {
  constructor() {}

  static check = (inputArray: Array<number>): number => {
    for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] + 1 !== inputArray[i + 1]) {
        return inputArray[i] + 1;
      }
    }
    return null;
  };
}

Main.main();
