/* Bubble sort using typescriptscript */

class Bubble {
  private bubble: Array<number>;
  private sorted: boolean;

  constructor(bubble: Array<number>) {
    this.bubble = bubble;
    this.sorted = false;
  }

  //sort the array
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

  //print the array
  public print(): Array<number> {
    return this.bubble;
  }
}

class Main {
  public static main(): void {
    let bubble1: Array<number> = [5, 2, 9, 12, 1, 8, 5];
    let bubble = new Bubble(bubble1);

    console.log(`Array before sort : ${bubble1}`);
    bubble.sort();
    console.log(`Array after sort : ${bubble.print()}`);
  }
}

Main.main();
