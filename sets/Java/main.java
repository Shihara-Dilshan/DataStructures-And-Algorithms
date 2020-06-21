import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

interface setsAbstract{

    boolean has(int value);
    List<Integer> values();
    boolean add(int value);
    boolean remove(int value);
    int size();
    List<Integer> union(sets AnotherSet);
    List<Integer> intersection(sets AnotherSet);
    List<Integer> difference(sets AnotherSet);
    boolean subset(sets AnotherSet);

}



class sets implements setsAbstract{
    private List<Integer> set;

    public sets() {
        this.set = new ArrayList<>();
    }


    @Override
    public boolean has(int value) {
        boolean result = this.set.stream()
                .anyMatch( element -> Integer.valueOf(element).equals(value));
        return result;
    }

    @Override
    public List<Integer> values() {
        return set;
    }

    @Override
    public boolean add(int value) {
        if(!this.has(value)){
            this.set.add(value);
            return true;
        }
        return false;
    }

    @Override
    public boolean remove(int value) {
        if(this.has(value)){
            this.set.remove(value);
            return true;
        }
        return false;
    }

    @Override
    public int size() {
        return this.set.size();
    }

    @Override
    public List<Integer> union(sets AnotherSet) {
        AnotherSet.values().stream().forEach(value -> this.set.add(value));
        return set;
    }

    @Override
    public List<Integer> intersection(sets AnotherSet) {
        List<Integer> intersection = AnotherSet.values().stream()
                .filter(value -> this.has(value))
                .collect(Collectors.toList());
        return intersection;
    }

    @Override
    public List<Integer> difference(sets AnotherSet) {
        List<Integer> difference = AnotherSet.values().stream()
                .filter(value -> !this.has(value))
                .collect(Collectors.toList());
        return difference;
    }

    @Override
    public boolean subset(sets AnotherSet) {
        return false;
    }
}


public class main {
    public static void main(String[] args) {
        sets set1 = new sets();
        sets set2 = new sets();

        set1.add(12);
        set1.add(1222);
        set1.add(12292);
        set2.add(12);
        set2.add(92);
        set2.add(12292);

        System.out.println(set1.difference(set2));

    }
}
