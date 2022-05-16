/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function(root, targetSum) {
    return dfs(root, targetSum);
    // T.C: O(N)
    // S.C: O(H)
};

const dfs = (root, target) => {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return target - root.val === 0;
    }
    return dfs(root.left, target - root.val) || 
        dfs(root.right, target - root.val);
}

/*
Runtime: 110 ms, faster than 27.62% of JavaScript online submissions for Path Sum.
Memory Usage: 46.3 MB, less than 13.67% of JavaScript online submissions for Path Sum.
 */

//not my code, only added to study it