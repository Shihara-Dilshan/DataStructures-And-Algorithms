class Node:
    def __init__(self, data):
        self.data = data
        self.right = None
        self.left = None


class BST:
    def __init__(self):
        self.root = None

    def add(self, data):
        if self.root is None:
            self.root = Node(data)
            return
        else:
            self.___search_tree(self.root, data)

    def ___search_tree(self, node, data):
        if data < node.data:
            if node.left is None:
                node.left = Node(data)
                return
            elif node.left is not None:
                return self.___search_tree(node.left, data)
        elif data > node.data:
            if node.right is None:
                node.right = Node(data)
                return
            elif node.right is not None:
                return self.___search_tree(node.right, data)
        else:
            return

    def find_min(self):
        node = self.root
        while node.left is not None:
            node = node.left
        return node.data

    def find_max(self):
        node = self.root
        while node.right is not None:
            node = node.right
        return node.data

    def find(self, data):
        node = self.root
        while node.data != data:
            if data < node.data:
                node = node.left
            else:
                node = node.right

            if node is None:
                return False

        return True

    def remove(self, data):
        if self.root is None:
            return False
        else:
            node = self.root
            while node.data != data:
                if data < node.data:
                    previousNode = node
                    node = node.left
                else:
                    previousNode = node
                    node = node.right

                if node is None:
                    return False

            if node.left is None and node.right is None:
                if previousNode.left == node:
                    previousNode.left = None
                elif previousNode.right == node:
                    previousNode.right = None
            elif node.right is None and node.left is not None:
                if previousNode.left == node:
                    previousNode.left = node.left
                elif previousNode.right == node:
                    previousNode.right = node.left
            elif node.right is not None and node.left is None:
                if previousNode.left == node:
                    previousNode.left = node.right
                elif previousNode.right == node:
                    previousNode.right = node.right
            elif node.right is not None and node.left is not None:
                current = node.left
                while current.right is not None:
                    current = current.right
                replace = current.data

                self.remove(replace)
                node.data = replace


def main():
    tree = BST()
    tree.add(50)
    tree.add(72)
    tree.add(76)
    tree.add(54)
    tree.add(67)
    tree.add(17)
    tree.add(23)
    tree.add(19)
    tree.add(12)
    tree.add(9)
    tree.add(14)
    print(tree.find(17))

    tree.remove(17)
    print(tree.find(17))


if __name__ == '__main__':
    main()
