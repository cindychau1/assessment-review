/*
Write a function, linkedListCycle, that takes in the head of a linked list as an argument.
The function should return a boolean indicating whether or not the linked list contains a cycle.

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle

          _____________
         /             \
a   ->   b  ->   c   -> d

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach: fast and slow pointers
// Time & Space Complexity: O(n) time | O(1) space
const linkedListCycle = (head) => {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    // progress slow to next node
    slow = slow.next;
    // progress fast to the next next node
    fast = fast.next.next;
    if (slow.val === fast.val) return true;
  }
  // if there is no cycle after traversing list, return false
  return false;
};
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle
console.log(linkedListCycle(a)); // true

module.exports = { linkedListCycle };
