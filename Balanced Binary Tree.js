/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return maxDepth(root) != -1;
};

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    if (left === -1 || right === -1 || Math.abs(left-right) > 1) {
            return -1;
        
    }
    else {
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
        
    }
    
};