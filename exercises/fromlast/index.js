// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    // initialize two variables that will serve as our reference points
    let slow = list.getFirst()
    let fast = list.getFirst()

    // create a while loop that iterates each value point of 'n'; this loop moves the 'fast' variable forward on the list with each iteration.
    while (n > 0) {
        fast = fast.next
        n--
    }
    // create ANOTHER while loop that references the new placement of 'fast' after the first loop. The loop runs until the fast variable hits the final node in the list, organically discovering the end of the list.
    while (fast.next) {
        // from start and n distance apart from fast, the slow variable ALSO begins moving forward on the list until fast hits the end. Because the gap between slow and fast is n nodes long, the position of slow will be the requested node from the function.
        slow = slow.next
        fast = fast.next
    }
    // return the slow variable answer
    return slow
}

module.exports = fromLast;
