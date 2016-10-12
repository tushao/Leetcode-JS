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

 //one queue
var levelOrder = function(root) {
  var result = [];
  
  if (root === null) {
      return result;
  }
  
  var queue = [];
  queue.push(root);
  
  while (queue.length !== 0) {
      var level = [];
      var size = queue.length;
      for (var i = 0; i < size; i++) {
          var head = queue.shift(root);
          level.push(head.val);
          if (head.left !== null) {
              queue.push(head.left);
          }
          if (head.right !== null) {
              queue.push(head.right);
          }
      }
      result.push(level);
  }
  return result;
};

//one queue with dummy node
var levelOrder = function(root) {
    var result = [];
    if (root === null) {
        return result;
    }
    
    var queue = [];
    queue.push(root);
    queue.push(null);
    
    var level = [];
    while(queue.length !== 0) {
        var node = queue.shift();
        if (node === null) {
            if (level.length === 0) {
                break;
            }
            result.push(level);
            level = [];
            queue.push(null);
            continue;
        }
        level.push(node.val);
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    return result;
    
};

//two queue
var levelOrder = function(root) {
    var result = [];
    if (root === null) {
        return result;
    }
    
    var queue = [];
    var queue1 = [];
    
    queue.push(root);
    while (queue.length !== 0) {
        var level = [];
        queue1 = [];
        var size = queue.length;
        for (var i = 0; i < size; i++) {
            var node = queue.shift();
            level.push(node.val);
            if (node.left !== null) {
                queue1.push(node.left);
            }
            if (node.right !== null) {
                queue1.push(node.right);
            }
        }
        var temp = queue;
        queue = queue1;
        queue1 = temp;
        
        result.push(level);
    }
    return result;
};

//DFS
var levelOrder = function(root) {
    result = [];
    if (root === null) {
        return result;
    }
    
    var maxLevel = 0;
    while (true) {
        var level = [];
        dfs (root, level, 0, maxLevel);
        if (level.length === 0) {
            break;
        }
        result.push(level);
        maxLevel++;
    }
    return result;
};

function dfs (root, level, curLevel, maxLevel) {
    if (root === null || curLevel > maxLevel) {
        return;
    }
    if (curLevel === maxLevel) {
        level.push(root.val);
        return;
    }
    dfs(root.left, level, curLevel+1, maxLevel);
     dfs(root.right, level, curLevel+1, maxLevel);
}

