/*sets implemented using java*/

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

    //check a value is existing on the current set
    @Override
    public boolean has(int value) {
        boolean result = this.set.stream()
                .anyMatch( element -> Integer.valueOf(element).equals(value));
        return result;
    }

    //get the current set values
    @Override
    public List<Integer> values() {
        return set;
    }

    //add a new element to the set
    @Override
    public boolean add(int value) {
        if(!this.has(value)){
            this.set.add(value);
            return true;
        }
        return false;
    }

    //remove an existing element from the set
    @Override
    public boolean remove(int value) {
        if(this.has(value)){
            this.set.remove(value);
            return true;
        }
        return false;
    }

    //get the current size if the set
    @Override
    public int size() {
        return this.set.size();
    }

    //combine two sets
    @Override
    public List<Integer> union(sets AnotherSet) {
        AnotherSet.values().stream().forEach(value -> this.set.add(value));
        return set;
    }

    //get the intersection( common values in both sets )
    @Override
    public List<Integer> intersection(sets AnotherSet) {
        List<Integer> intersection = AnotherSet.values().stream()
                .filter(value -> this.has(value))
                .collect(Collectors.toList());
        return intersection;
    }

    //get the different( different values in both sets )
    @Override
    public List<Integer> difference(sets AnotherSet) {
        List<Integer> difference = AnotherSet.values().stream()
                .filter(value -> !this.has(value))
                .collect(Collectors.toList());
        return difference;
    }

    //check another set is subset of this set or not
    @Override
    public boolean subset(sets AnotherSet) {
        int anotherSetLength = AnotherSet.values().size();
        int intersectionSize = this.intersection(AnotherSet).size();

        if(anotherSetLength == intersectionSize){
            return true;
        }

        return false;
    }
}


public class main {
    public static void main(String[] args) {
        sets set1 = new sets();//create a new set
        sets set2 = new sets();//create another new set

        set1.add(1); //add new items to the set1
        set1.add(2221);
        set1.add(123); //trying to add a duplicate value
        set1.add(33);

        set2.add(221); //add new items to the set2
        set2.add(123);
        set2.add(33);

        System.out.println(set1.has(1)); //check if the specific number exist on the set1
        System.out.println(set1.values()); //print the values of the set1

        set1.remove(1); //remove a value from the set
        System.out.println(set1.values()); //print the values of the set1 after removing values

        System.out.println(set1.size()); //print the size of the set

        System.out.println(set1.union(set2)); //adding to sets

        System.out.println(set1.intersection(set2)); //get the common value/s between two sets

        System.out.println(set1.difference(set2)); //get the uncommon value/s between two sets

        System.out.println(set1.subset(set2)); //checking is that set2 is a subset of set1 or not


    }
}
