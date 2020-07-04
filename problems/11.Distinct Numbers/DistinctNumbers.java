import java.util.*;

public class DistinctNumbers {
    private static int numberOfChar;
    private static int Char;
    private static Scanner in = new Scanner(System.in);
    private static boolean isFinished = false;

    public static void main(String[] args) {
        System.out.println("Enter the number of characters");
        numberOfChar = in.nextInt();
        Logic logic1 = new Logic(numberOfChar);

        for(int i=0; i <= numberOfChar-1; i++){
            System.out.println("Enter a number");
            try {
                Char = in.nextInt();
            }catch (InputMismatchException e){
                System.out.println("invalid inputs");
                return;
            }
            logic1.makeTheList(Char);

        }
        System.out.println("Number of DistinctNumbers : " + logic1.doLogic());
    }
}

class Logic{
    private int numberOfValues;
    private int[] myArray;
    private int count = 0;

    public Logic(int numberOfValues) {
        this.numberOfValues = numberOfValues;
        this.myArray = new int[numberOfValues];
    }

    public void makeTheList(int input){
        this.myArray[count] = input;
        count++;
    }

    public int doLogic(){
        Set<Integer> mySet = new HashSet<>();
        Arrays.stream(this.myArray).forEach(value -> {
            mySet.add(value);
        });

        return mySet.size();
    }
}
