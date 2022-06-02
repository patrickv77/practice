/*
Given the root of a binary tree, invert the tree, and return its root.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return null;

    let dst = function(root){
        if(root === null){
            return;
        }

        dst(root.left);
        dst(root.right);
    
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
    
        return root;
    }

    dst(root);

    return root;
};



/*
Runtime: 86 ms, faster than 38.34% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 42.5 MB, less than 47.27% of JavaScript online submissions for Invert Binary Tree.
*/