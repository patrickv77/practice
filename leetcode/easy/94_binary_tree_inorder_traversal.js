/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];

    traverse = function(node) {
        if(!node) return;

        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    
    return res;
};

/*
Runtime: 69 ms, faster than 66.70% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 42.2 MB, less than 52.17% of JavaScript online submissions for Binary Tree Inorder Traversal.
*/