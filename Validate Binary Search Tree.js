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

 //traverse
var result = { lastVal: Number.MIN_SAFE_INTEGER, firstNode: true};
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }
    if (!isValidBST(root.left)) {
        return false;
    }
    if (!result.firstNode && result.lastVal >= root.val) {
        return false;
    }
    result.firstNode = false;
    result.lastVal = root.val;
    
   if (!isValidBST(root.right)) {
        return false;
    }
    return true;
};

//DC