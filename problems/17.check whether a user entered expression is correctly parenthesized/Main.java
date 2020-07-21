import java.util.Scanner;
import java.util.Stack;

public class Main {
    private static Stack<Character> stack1 =  new Stack<Character>();
    private static Scanner scan = new Scanner(System.in);
    private static String userInput;
    private static String userInputEdited = "";


    public static void main(String[] args) {
        userInput = "3 + (( 6 * 2) –3)";

        for(char letter : userInput.toCharArray()){
            if(letter == '(' || letter == ')' ||
               letter == '{' || letter == '}' ||
               letter == '[' || letter == ']' ){
                userInputEdited = userInputEdited + letter;
            }
        }
        if(userInputEdited.length() % 2 != 0){
            System.out.println("Expression is Not correctly parenthesized.");
            return;
        }else{
            for(char letter : userInputEdited.toCharArray()){
                if(letter == '(' || letter == '{' || letter == '[' ){
                    stack1.push(letter);
                }else{
                    char popValue = stack1.pop();
                    if(popValue == '(' && (letter == ')') ||
                       popValue == '{' && (letter == '}') ||
                       popValue == '[' && (letter == ']')){
                    }else{
                        System.out.println("Expression is Not correctly parenthesized.");
                        return;
                    }
                }
            }
        }
        System.out.println("Expression is correctly parenthesized.");
    }
}
