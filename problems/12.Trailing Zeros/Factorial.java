public class Factorial {

    private static int trailingZeros = 0;
    private static int multiplier = 10;

    public static void main(String[] args) {
        System.out.println("factorial is : " + factorialFinder(10));
        System.out.println("trailing Zeros are : " + trailingZeros(factorialFinder(10)));

    }

    public static int factorialFinder(int input){
        if(input < 0){
            return -1;
        }else if(input == 1){
            return 1;
        }else {
            return input * factorialFinder(input-1);
        }
    }

    public static int trailingZeros(int factorialNo){
        if(factorialNo % multiplier == 0){
            trailingZeros++;
            multiplier *= 10;
            return trailingZeros(factorialNo);
        }else {
            return trailingZeros;
        }
    }
}
