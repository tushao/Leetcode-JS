/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

 //Iterative
var inorderSuccessor = function(root, p) {
    if (root === null || p === null) {
        return null;
    }
    
    var successor = null;
    while (root !== null) {
        if (p.val < root.val) {
            successor = root;
            root = root.left
        }
        else {
            root = root.right;
        }
    }
    return successor;
};

//Recursive
var inorderSuccessor = function(root, p) {
    if (root === null || p === null) {
        return null;
    }
    
    if (p.val < root.val) {
        var result = inorderSuccessor(root.left, p);
        return result === null ? root : result;
    }
    return inorderSuccessor(root.right, p);
};