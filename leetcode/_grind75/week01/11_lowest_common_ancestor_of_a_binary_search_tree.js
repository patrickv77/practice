/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //If the value of p is less than the root and q is less than the root, go to the left
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    //If the value of p is greater than the root and q is greater than the root, go to the right
    else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    //We found it!
    else {
        return root;
    }
};

/*
Runtime: 109 ms, faster than 55.30% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
Memory Usage: 52 MB, less than 82.13% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
*/

//not my code* just using for study