import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
	private static int ArrayMine[] = {1,1,12,3,4,56,6,7,8,7,8,10};
	private static List<Integer> newList = new ArrayList<>();

	public static void main(String[] args) {

		
		Arrays.stream(ArrayMine).forEach( value -> {
			if(!newList.contains(value)) {
				newList.add(value);
			}
		});
		
		Integer[] newArray = newList.stream().toArray(Integer[]::new);
		
		for(int i: newArray) {
			System.out.print(i + ", " );
		}
	
	}

}



