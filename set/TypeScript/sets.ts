/*sets implemeted using typescript*/

interface setsAbstract{
    has(value:any):boolean;
    values():Array<any>;
    add(value:any):boolean;
    remove(value:any):boolean;
    size():number;
    union(otherSet:sets):Array<any>;
    intersection(otherSet:sets):Array<any>;
    difference(otherSet:sets):Array<any>;
    subset(otherSet:sets):boolean;
}

class sets implements setsAbstract{

    private set:Array<any>;

    //initialize ES6 constructor
    constructor(){
        this.set = [];//create an empty set
    }

    //check a value is exisiting on the current set
    public has = (value:any):boolean => {
        if(this.set.indexOf(value) != -1){
            return true;
        }
        return false;
    }

    //get the current set values
    public values = ():Array<any> => {
        return this.set;
    }

    //add a new element to the set
    public add = (value:any):boolean => {
        if(this.has(value)){
            return false;
        }else{
            this.set.push(value);
        }
    }
    
    //remove an existing element from the set
    remove = (value:any):boolean => {
        if(this.has(value)){
            let indexOfValue = this.set.indexOf(value);
            this.set.splice(indexOfValue,1);
            return true;
        }else{
            return false;
        }
        
    }

    //get the current size if the set
    size = ():number => {
        return this.set.length;
    }

    //combine two sets 
    union = (otherSet:sets):Array<any> => {
        let unionSet = new sets();

        this.set.forEach(value => {
            unionSet.add(value);
        });

        otherSet.set.forEach(value => {
            unionSet.add(value);
        });

        return unionSet.values();
    }

    //get the intersection( comman values in both sets )
    intersection = (otherSet:sets):Array<any> => {
        let intersectionSet = new sets();

        this.set.forEach(value => {
            otherSet.set.forEach(AtherValue => {
                if(value === AtherValue){
                    intersectionSet.add(value);
                }
            });
        });
        return intersectionSet.values();
    }

    //get the different( different values in both sets )
    difference = (otherSet:sets):Array<any> => {
        let differenceSet = new sets();

        this.set.forEach(value => {
            otherSet.set.forEach(() => {
                if(!otherSet.has(value)){
                    differenceSet.add(value);
                }
            });
        });
        return differenceSet.values();

    }

    //check another set is subset of this set or not
     subset = (otherSet:sets):boolean => {
        let commanCounter = otherSet.values().length;//legth of the otherset

        let interSectionlen = this.intersection(otherSet).length;//how many comman items are exist between these 2 sets

        if(commanCounter === interSectionlen){
            return true;
        }
        return false;
    }

}

class Main{
    public static main():void{
        let set1 = new sets();//create a new set
        let set2 = new sets();//create another new set

        set1.add(1);//add new items to the set1
        set1.add(2221);
        set1.add(123);//trying to add a duplicate value
        set1.add(33);

        set2.add(221);//add new items to the set2
        set2.add(123);
        set2.add(33);

        console.log(set1.has(1));//check if the specific number exist on the set1
        console.log(set1.values());//print the values of the set1

        set1.remove(1);//remove a value from the set
        console.log(set1.values());//print the values of the set1 after removing values

        console.log(set1.size());//print the size of the set

        console.log(set1.union(set2));//adding to sets
       
        console.log(set1.intersection(set2));//get the common value/s between two sets

        console.log(set1.difference(set2));//get the uncommon value/s between two sets

        console.log(set1.subset(set2));//checking is that set2 is a subset of set1 or not
    }
}

//do not edit this line
Main.main();