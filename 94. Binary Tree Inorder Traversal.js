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
 
//Non-recursion
var inorderTraversal = function(root) {
    var stack = [];
    var inorder = [];
    
    var node = root;
    while(node !== null || stack.length) {
        while(node !== null) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        inorder.push(node.val);
        node = node.right;
    }
    
    return inorder;
};


 //traverse
var inorderTraversal = function(root) {
    var result = [];
    traverse(root, result);
    return result;
};

function traverse (root, result) {
    if (root === null) {
        return;
    }
    
    traverse(root.left, result);
    result.push(root.val);
    traverse(root.right, result);
}

//DC
var inorderTraversal = function(root) {
    var result = [];
    if (root === null) {
        return result;
    }
    
    var left = inorderTraversal(root.left);
    var right = inorderTraversal(root.right);
    
    result = result.concat(left);
    result.push(root.val);
    result = result.concat(right);
    
    return result;
};
