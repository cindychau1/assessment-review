/**
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments.
The function should merge the two lists together into single sorted linked list.
The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.

5 -> 7 -> 10 -> 12 -> 20 -> 28
6 -> 8 -> 9 -> 25

output => 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach: Iterative
// Time & Space Complexity:
const mergeTwoLists = (head1, head2) => {
  // check whether head1 or head2 is smaller and start with smaller one
  let current1 = head1;
  let current2 = head2;

  // if pointer points to null, take remaining elements of other list and tack it onto output
};
const a = new Node('5');
const b = new Node('7');
const c = new Node('10');
const d = new Node('12');
const e = new Node('20');
const f = new Node('28');

const q = new Node('6');
const r = new Node('8');
const s = new Node('9');
const t = new Node('25');

a.next = q;
q.next = b;
b.next = r;
r.next = s;
s.next = c;
c.next = d;
d.next = e;
e.next = t;
t.next = f;
console.log(mergeTwoLists(a, q));
module.exports = { mergeTwoLists };
