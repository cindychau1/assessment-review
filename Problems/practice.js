// Linked List
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 1 -> 2 -> 7 -> 6 -> 8

const one = new Node(1);
const two = new Node(2);
const seven = new Node(7);
const six = new Node(6);
const eight = new Node(8);

one.next = two;
two.next = seven;
seven.next = six;
six.next = eight;

// Traverse a Linked List
const traversal = (head) => {
  const output = [];
  let current = head;
  while (current) {
    output.push(current.val);
    current = current.next;
  }
  return output;
};
console.log(traversal(one));
