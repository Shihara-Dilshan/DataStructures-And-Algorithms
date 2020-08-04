var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        var _this = this;
        this.print = function () {
            console.log(_this.collection);
        };
        this.enqueue = function (input) {
            if (_this.collection.length === 0) {
                _this.collection.push(input);
            }
            else {
                for (var i = 0; i < _this.collection.length; i++) {
                    if (input[0] <= _this.collection[i][0]) {
                        _this.collection.splice(i, 0, input);
                        return;
                    }
                }
                _this.collection.push(input);
            }
        };
        this.collection = new Array();
    }
    PriorityQueue.prototype.dequeue = function () {
        return this.collection.shift();
    };
    PriorityQueue.prototype.front = function () {
        return this.collection[0];
    };
    PriorityQueue.prototype.size = function () {
        return this.collection.length;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.collection.length === 0;
    };
    return PriorityQueue;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var PQueue = new PriorityQueue();
        PQueue.enqueue([10, "shihara"]);
        PQueue.enqueue([7, "dilshan"]);
        PQueue.enqueue([11, "shihara"]);
        PQueue.enqueue([8, "dilshan"]);
        PQueue.dequeue();
        PQueue.print();
    };
    return Main;
}());
Main.main();
