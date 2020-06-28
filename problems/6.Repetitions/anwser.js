class Repetitions {
  constructor(input) {
    this.input = input;
    this.maxValues = [];
    this.MySet = [];
    this.check();
    this.count = 1;
  }

  check = () => {
    for (let letter of this.input) {
      this.MySet.push(letter);
    }
  };

  checker = () => {
    let popValue = this.MySet.pop();
    if (this.MySet.length === 1 || this.MySet.length === 0) {
      if (popValue === this.MySet[0]) {
        this.count = this.count + 1;
      }
      this.maxValues.push(this.count);
      return;
    } else if (popValue === this.MySet[this.MySet.length - 1]) {
      this.count = this.count + 1;
      return this.checker();
    } else{
      this.maxValues.push(this.count);
      this.count = 1;
      return this.checker();
    }
  };

  answer = () => {
    return this.maxValues.sort()[this.maxValues.length-1]; 
  }
}

class Main {
  static main = () => {

    let R = new Repetitions("ATTCGGGA");
    R.checker();
    console.log(R.answer());
  };
}

Main.main();
