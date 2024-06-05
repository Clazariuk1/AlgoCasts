import linkedlist, unittest
from index import from_last

class TestLinkedList(unittest.TestCase):
    def test_from_last_is_function(self):
        self.assertTrue(callable(from_last))

    def test_from_last_returns_correct_node(self):
        linked_list = linkedlist()
        linked_list.insert_last('a')
        linked_list.insert_last('b')
        linked_list.insert_last('c')
        linked_list.insert_last('d')
        linked_list.insert_last('e')

        self.assertEqual(from_last(linked_list, 3).data, 'b')

if __name__ == '__main__':
    unittest.main()
