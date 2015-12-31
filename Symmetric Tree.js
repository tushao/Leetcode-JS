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
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    return call(root.left, root.right);
};

var call = function(l, r) {
    if (l === null && r === null) {
        return true;
    }
    if (l !== null && r === null) {
        return false;
    }
    if (r !== null && l === null) {
        return false;
    }
    if(l.val !== r.val){
        return false;
    }
    else {
        return call(l.left, r.right) && call(l.right, r.left);
    }
};