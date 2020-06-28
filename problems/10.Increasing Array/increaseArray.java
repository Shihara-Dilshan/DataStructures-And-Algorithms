import java.util.Arrays;

public class increaseArray {
    public static void main(String[] args) {
        Array A = new Array();
        A.Increase();
        System.out.println("Mininum number of turns : " + A.getTurns());
    }
}


class Array{
    private int myArray[];
    private int turns;

    public Array() {
        this.myArray = new int[]{3, 2, 5, 1, 7};
        this.turns = 0;
    }

    public int getTurns() {
        return turns;
    }

    public void Increase(){
        for (int i=0; i < myArray.length-1; i++){
            if(myArray[i] > myArray[i+1]){
                while(myArray[i] > myArray[i+1]){
                    myArray[i+1] = myArray[i+1] + 1;
                    this.turns = this.turns + 1;
                }
            }
        }
    }

    public int[] getMyArray() {
        return myArray;
    }

    @Override
    public String toString() {
        return "Array{" +
                "myArray=" + Arrays.toString(myArray) +
                '}';
    }
}

