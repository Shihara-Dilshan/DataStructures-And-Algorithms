import java.util.List;
import java.util.ArrayList;
import java.util.Comparator;

public class Answer{
    private static List<Integer> myList = new ArrayList<>();
    private static Integer myArray[] = {10,2,3,1,8,6,4,7,9};
    private static Integer missingNumber = null;

    public static void main(String[] args) {
        for(Integer i : myArray){
            myList.add(i);
        }

        //sort the list using Comparator interface
        myList.sort(new Comparator<Integer>(){
            @Override
            public int compare(Integer o1, Integer o2) {
                if(o1 > o2){
                    return 1;
                }else{
                    return -1;
                }
            }
        }); 

        // iterating through the list 
        // add 1 to curent element
        // check whether next element is equal to that value or not
        // if not previous index has the missing number
        for(int i=0; i<myList.size(); i++){
            if(i != myList.size()-1){
                if((myList.get(i) + 1) != myList.get(i+1)){
                    missingNumber = myList.get(i) + 1;
                }
            }
        }

        System.out.println("Missing number is "+ missingNumber);
    }
}