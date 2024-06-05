class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_first(self, data):
        self.head = Node(data, self.head)

    def size(self):
        counter = 0
        node = self.head

        while node:
            counter += 1
            node = node.next

        return counter

    def get_first(self):
        return self.head

    def get_last(self):
        if not self.head:
            return None

        node = self.head
        while node.next:
            node = node.next
        return node

    def clear(self):
        self.head = None

    def remove_first(self):
        if not self.head:
            return

        self.head = self.head.next

    def remove_last(self):
        if not self.head:
            return

        if not self.head.next:
            self.head = None
            return

        previous = self.head
        node = self.head.next
        while node.next:
            previous = node
            node = node.next
        previous.next = None

    def insert_last(self, data):
        last = self.get_last()

        if last:
            last.next = Node(data)
        else:
            self.head = Node(data)

    def get_at(self, index):
        counter = 0
        node = self.head
        while node:
            if counter == index:
                return node
            counter += 1
            node = node.next
        return None

    def remove_at(self, index):
        if not self.head:
            return

        if index == 0:
            self.head = self.head.next
            return

        previous = self.get_at(index - 1)
        if not previous or not previous.next:
            return
        previous.next = previous.next.next

    def insert_at(self, data, index):
        if not self.head:
            self.head = Node(data)
            return

        if index == 0:
            self.head = Node(data, self.head)
            return

        previous = self.get_at(index - 1) or self.get_last()
        node = Node(data, previous.next)
        previous.next = node

    def for_each(self, fn):
        node = self.head
        counter = 0
        while node:
            fn(node, counter)
            node = node.next
            counter += 1

    def __iter__(self):
        node = self.head
        while node:
            yield node
            node = node.next

# example usage:
if __name__ == "__main__":
    linked_list = LinkedList()
    linked_list.insert_first(1)
    linked_list.insert_first(2)
    linked_list.insert_first(3)
    linked_list.insert_last(4)
    print("Size:", linked_list.size())  # Output: Size: 4

    print("First element:", linked_list.get_first().data)  # Output: First element: 3
    print("Last element:", linked_list.get_last().data)  # Output: Last element: 4

    linked_list.remove_first()
    print("First element after removal:", linked_list.get_first().data)  # Output: First element after removal: 2

    linked_list.remove_last()
    print("Last element after removal:", linked_list.get_last().data)  # Output: Last element after removal: 2

    linked_list.insert_at(5, 1)
    linked_list.for_each(lambda node, index: print(f"Node at index {index}: {node.data}"))
    # Output: Node at index 0: 2
    #         Node at index 1: 5

    for node in linked_list:
        print("Node value:", node.data)
    # Output: Node value: 2
    #         Node value: 5
