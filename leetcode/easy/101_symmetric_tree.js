/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
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
var isSymmetric = function(root) {
    let tree = [];
    function inorderHelper(r) {
        if(r === null) {
            return;
        }

        inorderHelper(r.left);
        tree.push(r.val);
        inorderHelper(r.right);
        
    }

    inorderHelper(root);

    let rightItr = tree.length -1;
    for(let i = 0; i < tree.length/2; i++) {
        if(tree[i] != tree[rightItr]) {
            return false;
        }
        rightItr--;
    }

    return true;
};

console.log(isSymmetric([1,2,3,4,5,6]));

/*
195/198 cases passed
*/

//studyable solution

var isSymmetric = function(root) {
    if(!root) return true;
    return dfs(root.left, root.right);
  };
  
  function dfs(s, t){
    if(!s && !t) return true;
    if(!s || !t) return false;
    if(s.val !== t.val) return false;
    
    return dfs(s.left, t.right) && dfs(s.right, t.left)
  }
