var NodeX = /** @class */ (function () {
    function NodeX(data) {
        var _this = this;
        this.getData = function () {
            return _this.data;
        };
        this.setData = function (data) {
            _this.data = data;
        };
        this.getRightNode = function () {
            return _this.rightNode;
        };
        this.setRightNode = function (rightNode) {
            _this.rightNode = rightNode;
        };
        this.getLeftNode = function () {
            return _this.leftNode;
        };
        this.setLeftNode = function (leftNode) {
            _this.leftNode = leftNode;
        };
        this.data = data;
        this.rightNode = this.leftNode = null;
    }
    return NodeX;
}());
var BST = /** @class */ (function () {
    function BST() {
        var _this = this;
        this.isEmpty = function () {
            return _this.root === null;
        };
        //insert using while loop
        this.insert = function (data) {
            if (_this.root === null) {
                _this.root = new NodeX(data);
                return;
            }
            else {
                var current = _this.root;
                while (current !== null) {
                    if (data < current.getData()) {
                        if (current.getLeftNode() === null) {
                            current.setLeftNode(new NodeX(data));
                            break;
                        }
                        else {
                            current = current.getLeftNode();
                        }
                    }
                    else {
                        if (current.getRightNode() === null) {
                            current.setRightNode(new NodeX(data));
                            break;
                        }
                        else {
                            current = current.getRightNode();
                        }
                    }
                }
            }
        };
        this.inOrder = function (Node) {
            if (Node === void 0) { Node = _this.root; }
            if (Node === null)
                return;
            _this.inOrder(Node.getLeftNode());
            console.log(Node.getData());
            _this.inOrder(Node.getRightNode());
        };
        this.preOrder = function (Node) {
            if (Node === void 0) { Node = _this.root; }
            if (Node === null)
                return;
            console.log(Node.getData());
            _this.inOrder(Node.getLeftNode());
            _this.inOrder(Node.getRightNode());
        };
        this.postOrder = function (Node) {
            if (Node === void 0) { Node = _this.root; }
            if (Node === null)
                return;
            _this.inOrder(Node.getLeftNode());
            _this.inOrder(Node.getRightNode());
            console.log(Node.getData());
        };
        this.root = null;
    }
    return BST;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var bst = new BST();
        bst.insert(5);
        bst.insert(3);
        bst.insert(4);
        bst.insert(6);
        bst.insert(7);
        bst.insert(9);
        bst.insert(12);
        bst.insert(10);
        bst.inOrder();
    };
    return Main;
}());
Main.main();
