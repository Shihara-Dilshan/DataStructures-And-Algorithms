# implementing stacks using python
#test comment

class Node:

    def __init__(self, value):
        self.value = value
        self.nextNode = None

    def get_value(self):
        return self.value

    def set_value(self, value):
        self.value = value

    def get_next_node(self):
        return self.nextNode

    def set_next_node(self, next_node):
        self.nextNode = next_node


