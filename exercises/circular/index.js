// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    // create variable lists starting at beginning of argument list
    let slow = list.getFirst()
    let fast = list.getFirst()
    // while there is additional upcoming linked lists within either slow or fast designation, MOVE UP the list.
    while (fast.next && fast.next.next) {
    // if the lists both arrive at the same point, ie null or the same value, it is a circular list
        if (slow === fast) {
            return true
        }
    }
    return false
}

module.exports = circular;
