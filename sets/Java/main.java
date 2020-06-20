import java.util.ArrayList;
import java.util.List;

interface setsAbstract{

    boolean has(int value);
    List<Integer> values();
    boolean add(int value);
    boolean remove(int value);
    int size();
    List<Integer> union(sets set);
    List<Integer> intersection(sets set);
    List<Integer> difference(sets set);
    boolean subset(sets set);

}



class sets implements setsAbstract{
    private List<Integer> set;

    public sets() {
        this.set = new ArrayList<>();
    }


    @Override
    public boolean has(int value) {
        set.stream()




    }

    @Override
    public List<Integer> values() {
        return null;
    }

    @Override
    public boolean add(int value) {
        return false;
    }

    @Override
    public boolean remove(int value) {
        return false;
    }

    @Override
    public int size() {
        return 0;
    }

    @Override
    public List<Integer> union(sets set) {
        return null;
    }

    @Override
    public List<Integer> intersection(sets set) {
        return null;
    }

    @Override
    public List<Integer> difference(sets set) {
        return null;
    }

    @Override
    public boolean subset(sets set) {
        return false;
    }
}


public class main {
    public static void main(String[] args) {

    }
}
