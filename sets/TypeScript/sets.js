var sets = /** @class */ (function () {
    //initialize ES6 constructor
    function sets() {
        var _this = this;
        //check a value is exisiting on the current set
        this.has = function (value) {
            if (_this.set.indexOf(value) != -1) {
                return true;
            }
            return false;
        };
        //get the current set values
        this.values = function () {
            return _this.set;
        };
        //add a new element to the set
        this.add = function (value) {
            if (_this.has(value)) {
                return false;
            }
            else {
                _this.set.push(value);
            }
        };
        //remove an existing element from the set
        this.remove = function (value) {
            if (_this.has(value)) {
                var indexOfValue = _this.set.indexOf(value);
                _this.set.splice(indexOfValue, 1);
                return true;
            }
            else {
                return false;
            }
        };
        //get the current size if the set
        this.size = function () {
            return _this.set.length;
        };
        //combine two sets 
        this.union = function (otherSet) {
            var unionSet = new sets();
            _this.set.forEach(function (value) {
                unionSet.add(value);
            });
            otherSet.set.forEach(function (value) {
                unionSet.add(value);
            });
            return unionSet.values();
        };
        //get the intersection( comman values in both sets )
        this.intersection = function (otherSet) {
            var intersectionSet = new sets();
            _this.set.forEach(function (value) {
                otherSet.set.forEach(function (AtherValue) {
                    if (value === AtherValue) {
                        intersectionSet.add(value);
                    }
                });
            });
            return intersectionSet.values();
        };
        //get the different( different values in both sets )
        this.difference = function (otherSet) {
            var differenceSet = new sets();
            _this.set.forEach(function (value) {
                otherSet.set.forEach(function () {
                    if (!otherSet.has(value)) {
                        differenceSet.add(value);
                    }
                });
            });
            return differenceSet.values();
        };
        this.subset = function () {
            return true;
        };
        this.set = []; //create an empty set
    }
    return sets;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var set1 = new sets(); //create a new set
        var set2 = new sets(); //create another new set
        set1.add(1); //add new items to the set1
        set1.add(2221);
        set1.add(2221); //trying to add a duplicate value
        set1.add(33);
        set2.add(221); //add new items to the set2
        set2.add(123);
        set2.add(33);
        console.log(set1.has(1)); //check if the specific number exist on the set1
        console.log(set1.values()); //print the values of the set1
        set1.remove(1); //remove a value from the set
        console.log(set1.values()); //print the values of the set1 after removing values
        console.log(set1.size()); //print the size of the set
        console.log(set1.union(set2)); //adding to sets
        console.log(set1.intersection(set2)); //get the common value/s between two sets
        console.log(set1.difference(set2)); //get the uncommon value/s between two sets
    };
    return Main;
}());
//do not edit this line
Main.main();
