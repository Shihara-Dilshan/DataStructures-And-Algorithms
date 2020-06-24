/* Bubble sort using java */

import java.util.Arrays;

public class BubbleSort {

    public static void main(String[] args) {
        int bubble[] = {5, 2, 9, 12, 1, 8, 5};
        Bubble bs = new Bubble(bubble);
        bs.sort();
        System.out.println(bs);
    }
}

class Bubble{
    private int bubble[];
    private boolean sorted;

    public Bubble(int[] bubble) {
        this.bubble = bubble;
        this.sorted = false;
    }

    //sort the array
    public void sort(){
        while (!this.sorted){
            this.sorted = true;
            for (int i = 0; i < this.bubble.length-1; i++){
                if(this.bubble[i] > this.bubble[i+1]){
                    int tempValue = this.bubble[i];
                    this.bubble[i] = this.bubble[i+1];
                    this.bubble[i+1] = tempValue;
                    this.sorted = false;
                }
            }
        }
    }

    //print the object
    @Override
    public String toString() {
        return "Bubble{" +
                "bubble=" + Arrays.toString(bubble) +
                ", sorted=" + sorted +
                '}';
    }


}


