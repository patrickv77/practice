/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return getHeight(root) !== -1;
    
    function getHeight(root) {
        if(!root) {
            return 0;
        }
        let left = getHeight(root.left);
        let right = getHeight(root.right);
        if(left == -1 || right == -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        return 1 + Math.max(left, right);
    }
};

/*
Runtime: 95 ms, faster than 61.64% of JavaScript online submissions for Balanced Binary Tree.
Memory Usage: 47.7 MB, less than 28.26% of JavaScript online submissions for Balanced Binary Tree.
*/

//not my code* just using for study