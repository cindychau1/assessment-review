/**
 * Write a function, reverseList, that takes in the head of a linked list as an argument.
 * The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach: Iterative, two pointers
// Time & Space Complexity: O(n) time and O(1) space
const reverseList = (head) => {
  // intialize current as head
  let current = head;
  let prev = null;
  while (current !== null) {
    const next = current.next;
    // reverse direction by setting current.next to prev
    current.next = prev;
    // shift positions of prev and current by 1
    prev = current;
    current = next;
  }
  // return new head of reverse linked list
  return prev;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
a.next = b;
b.next = c;
c.next = d;
console.log(reverseList(a));

module.exports = { reverseList };
