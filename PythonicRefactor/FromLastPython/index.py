def from_last(linked_list, n):
    slow = linked_list.head
    fast = linked_list.head

    # Move fast n steps ahead
    for _ in range(n):
        if fast is None:
            return None
        fast = fast.next

    # Move both pointers at the same pace
    while fast and fast.next:
        slow = slow.next
        fast = fast.next

    return slow
