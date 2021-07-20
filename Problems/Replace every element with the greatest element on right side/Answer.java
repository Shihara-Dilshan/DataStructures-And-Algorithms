import java.util.Arrays;
import java.util.Set;
import java.util.TreeSet;

public class Answer {

  private static int[] myArr = { 3, 4, 6, 8, 2, 1, 0, 7 };
  private static Set<Integer> tempSet = new TreeSet<>();

  public static void main(String[] args) {
    for (int i = 0; i < myArr.length - 1; i++) {
      for (int j = i + 1; j < myArr.length; j++) {
        tempSet.add(myArr[j]);
      }
      myArr[i] = (int) tempSet.toArray()[tempSet.toArray().length - 1];
      tempSet.clear();
    }

    System.out.println(Arrays.toString(myArr));
  }
}
