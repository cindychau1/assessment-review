/**
Write a function, invertTree, that takes in the root of a binary tree.
The function should flip the binary tree, turning left subtrees into right subtrees and vice-versa. This flipping should occur in-place by modifying the original tree. The function should return the root of the tree


     a
   /    \
  b      c
 / \      \
d   e      f
   / \
   g  h

flipTree(a);

      a
   /    \
  c      b
 /     /   \
f     e    d
    /  \
   h    g
 * */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach:
// Time & Space Complexity:
const invertTree = (root) => {
  // base
  if (!root) return null;
  // recurisvely call left and right side of trees
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  // set root.left to right subtree and root.right to left subtree
  root.left = right;
  root.right = left;
  // return root to get new inverted tree
  return root;
};

module.exports = { invertTree };
