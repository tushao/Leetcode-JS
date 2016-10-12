/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 //traverse
var postorderTraversal = function(root) {
    var result = [];
    traverse(root, result);
    return result;
};

var traverse = function(root, result) {
    if (root === null) {
        return;
    }
    traverse(root.left, result);
    traverse(root.right, result);
    result.push(root.val);
}

//DC
var postorderTraversal = function(root) {
    var result = [];
    if (root === null) {
        return result;
    }
    
    var left = postorderTraversal(root.left);
    var right = postorderTraversal(root.right);
    
    result = result.concat(left);
    result = result.concat(right);
    result.push(root.val);
    
    return result;
};