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

 //non-recursion
var preorderTraversal = function(root) {
    var stack = [];
    var preorder = [];
    
    if (root === null) {
        return preorder;
    }
    
    stack.push(root);
    while (stack.length) {
        var node = stack.pop();
        preorder.push(node.val);
        
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    
    return preorder;
};

//traverse
var preorderTraversal = function(root) {
    var result = [];
    traverse(root, result);
    return result;
};

function traverse(root, result) {
    if (root === null) {
        return;
    }
    result.push(root.val);
    traverse(root.left, result);
    traverse(root.right, result);
}

//Divede & Conquer
var preorderTraversal = function(root) {
    var result = [];
    if (root === null) {
        return result;
    }
    
    var left = preorderTraversal(root.left);
    var right = preorderTraversal(root.right);
    
    result.push(root.val);
    result = result.concat(left);
    result = result.concat(right);
    
    return result;
};
