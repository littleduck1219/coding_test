class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, data):
        self.head = Node(data)

    def append(self, data):
        if self.head is None:
            self.head.next = Node(data)
            return

        self.head.next = Node(data)
        cur = self.head
        while cur.next is not None:
            cur = cur.next
            print("cur is ", cur.data)
        cur.next = Node(data)

    def print_all(self):
        print("hihihi")
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next


linked_list = LinkedList(3)
linked_list.append(4)
linked_list.append(5)
linked_list.print_all()