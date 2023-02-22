/**
 Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
 The function should return the total sum of all values in the linked list.

 5 -> 4 -> 3 -> -1 -> 7
 Output => 18

 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach: Iterative, Pointers
// Time & Space Complexity: O(n) time and O(1) space
const sumList = (head) => {
  // initialize current as head
  let current = head;
  let sum = 0;
  // traverse through list
  while (current !== null) {
    // add current.val to existing sum
    sum += current.val;
    // shift current to the next node
    current = current.next;
  }
  return sum;
};
const a = new Node(5);
const b = new Node(4);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(sumList(a));

module.exports = { sumList };
