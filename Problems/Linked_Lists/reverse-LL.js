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

// Approach:
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

// a -> b -> c -> d
// a <- b <- c <- d (reverse)

module.exports = { reverseList };
