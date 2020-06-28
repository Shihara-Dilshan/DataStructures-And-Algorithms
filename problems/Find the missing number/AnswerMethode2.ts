class Main {

  public static main(): void {
    const ArrayUnsorted = [1, 2, 3, 7, 4, 5];
    console.log(Main.findMissing(ArrayUnsorted));
  }

  static findMissing = (ArrayInput: Array<number>) => {
    let ArraySorted:Array<number> = ArrayInput.sort();
    let n:number =  ArraySorted[ArraySorted.length-1];
    let needSum:number = Main.findSum(n);
    let surrentSum:number = Main.findCurrentSum(ArrayInput);

    if(needSum === surrentSum){
      return null;
    }else{
      return `missing number is ${needSum - surrentSum}`;
    }
  }

  static findSum = (n:number):number => {
    let sum:number = n * (n+1) / 2;
    return sum;
  }

  static findCurrentSum = (ArrayInput: Array<number>): number => {
    let currentSum:number = 0;
    ArrayInput.forEach( num => {
      currentSum = currentSum + num;
    });

    return currentSum;
  }

}

Main.main();
