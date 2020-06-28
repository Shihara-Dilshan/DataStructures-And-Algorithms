class OperationAlgorithm {
  private inputNo: number;

  constructor(inputNo: number) {
    this.inputNo = inputNo;
    console.log(this.inputNo);
  }

  weiredAlgorithmn = (): void => {
    if (this.inputNo % 2 == 0) {
      this.inputNo = this.inputNo / 2;
    } else {
      this.inputNo = this.inputNo * 3 + 1;
    }

    if (this.inputNo !== 1) {
      console.log(this.inputNo);
      return this.weiredAlgorithmn();
    }

    if (this.inputNo === 1) {
      console.log(this.inputNo);
    }
  };
}

class Main {
  public static main = (): void => {
    let o1: OperationAlgorithm = new OperationAlgorithm(3);
    o1.weiredAlgorithmn();
  };
}

Main.main();
