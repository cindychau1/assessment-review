/**
 Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
 The function should return the maximum sum of any root to leaf path within the tree.
 You may assume that the input tree is non-empty.



      3
   /    \
  11     4
 / \      \
4   -2     1

maxPathSum(a); // -> 18

 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach:
// Time & Space Complexity: O(n) time and O(h) spsace where n is number of nodes and h is height of trees
const maxPathSum = (root) => {
  // base: if root does not exist, return -Infinity since it would always be smaller value in comparison
  if (!root) return -Infinity;
  // base: if root has no children, return root.val
  if (!root.left && !root.right) return root.val;
  const leftMaxPathSum = maxPathSum(root.left);
  const rightMaxPathSum = maxPathSum(root.right);
  return root.value + Math.max(leftMaxPathSum, rightMaxPathSum);
};

module.exports = { maxPathSum };
