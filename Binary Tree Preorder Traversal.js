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
var preorderTraversal = function(root) {
    var result = [];
    if ( root === null) {
        return result;
    }
    
    //Divide
    var left, right = [];
    left = preorderTraversal(root.left);
    right = preorderTraversal(root.right);
    
    //Conquer
    result.push(root.val);

    if(root.left !== null) {
        result = result.concat(left);
    }
    
    if(root.right !== null) {
        result = result.concat(right);
    }
    
    return result;
};