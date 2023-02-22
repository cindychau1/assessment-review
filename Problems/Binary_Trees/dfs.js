/*
 Write a function, dfs, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in breadth-first order.
      8
    /   \
   1     2
  / \     \
 9   4     3

 Output => [8, 1, 9, 4, 2, 3]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach: Iterative, first-in last-out stack
// Time & Space Complexity: O(n) time, O(n) space
// Depth first search - must go deeper first before going across
const dfs = (root) => {
  if (!root) return [];
  // store root node in stack
  const stack = [root];
  const output = [];
  while (stack.length) {
    // pop off current value and push it onto output
    const current = stack.pop();
    output.push(current.val);
    // if current has a child node on its right or left, push it onto stack
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return output;
};

module.exports = { dfs };
