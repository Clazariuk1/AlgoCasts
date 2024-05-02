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

// This was beyond my current knowledge base, so rather than solve I chose to research concept and examine the answers in depth.

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    // while there is additional upcoming linked lists within either slow or fast designation, MOVE UP the list.
    slow = slow.next;
    fast = fast.next.next;
    // if the lists both arrive at the same point, ie null or the same value, it is a circular list.
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;
