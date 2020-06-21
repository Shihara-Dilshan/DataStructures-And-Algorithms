"use strict";
/* implementing stacks using typescript */
exports.__esModule = true;
var stacks = /** @class */ (function () {
    //initialize ES6 constructor
    function stacks() {
        var _this = this;
        //Add an value to the stack(to end of the stack)
        this.push = function (value) {
            _this.storage[_this.count] = value;
            _this.count++;
        };
        //Remove the last element from the stack and return the removed value
        this.pop = function () {
            //if the stack is empty return undefined
            if (_this.count === 0) {
                return undefined;
            }
            else {
                _this.count--; //resuce the size of the stack by 1
                var popValue = _this.storage[_this.count]; //extract the last value from the stack to a variable
                delete _this.storage[_this.count]; //remove the value from the stack
                return popValue; //return the removed value
            }
        };
        //Get the size of the stack
        this.size = function () {
            return _this.count;
        };
        //Get the last element of the stack(but not remove the value)
        this.peek = function () {
            return _this.storage[_this.count - 1];
        };
        //check the stack is empty or not
        this.isEmpty = function () {
            if (_this.count === 0) {
                return true;
            }
            else {
                return false;
            }
        };
        this.count = 0; //To count the current number of items in the stack
        this.storage = {}; //An empty object to store a stack
    }
    return stacks;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var stack1 = new stacks(); //create a new stack 
        stack1.push(1); //add few elements to the stack 
        stack1.push(45);
        stack1.push(98);
        stack1.push(5);
        stack1.push(23);
        console.log(stack1.peek()); //print the last element of the stack 
        stack1.pop(); //remove the last element from the stack
        console.log(stack1.peek()); //print the new last element of the stack 
        console.log(stack1.isEmpty()); //check the stack is empty or not
        console.log(stack1.size()); //print the size of the stack
    };
    return Main;
}());
//do not edit this line
Main.main();
exports["default"] = stacks;
