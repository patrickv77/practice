/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var res = true;

    traverse = function(nodeP, nodeQ) {
        if(!nodeP && !nodeQ){
            return;
        }else if(nodeP && !nodeQ){
            res = false;
            return;
        }else if(!nodeP && nodeQ){
            res = false;
            return;
        }else{
            traverse(nodeP.left, nodeQ.left);
            if(nodeP.val != nodeQ.val){
                res = false;
            }
            traverse(nodeP.right, nodeQ.right);
        }
    }
    
    traverse(p,q);
    
    return res;
};

/*
Runtime: 65 ms, faster than 77.18% of JavaScript online submissions for Same Tree.
Memory Usage: 42.1 MB, less than 76.78% of JavaScript online submissions for Same Tree.
*/