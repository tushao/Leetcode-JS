/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var result = [];
    if (root === null) {
        return result;
    }
    
    var queue = [];
    var level = [];
    var curLevel = 0;
    queue.push(root);
    
    while(queue.length !== 0) {
        level = [];
        var size = queue.length;
        for (var i = 0; i < size; i++) {
            var node = queue.shift();
            level.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        if (curLevel % 2) {
            result.push(level.reverse());
        }
        else {
            result.push(level);
        }
        curLevel++;
    }
    return result;
};